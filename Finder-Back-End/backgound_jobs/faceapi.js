const { Founds } = require("../models/found");
const { Reports } = require("../models/missingReport");
const { saveNotificationToDB } = require("./notification");
const faceapi = require("face-api.js");
const canvas = require("canvas");
const mongoose = require("mongoose");
const _ = require("lodash");
const fs = require("fs");
const fetch = require("node-fetch");
const FoundData = [
  "Image",
  "email",
  "Fname",
  "Mname",
  "Lname",
  "Gender",
  "Age",
  "User_Fname",
  "User_Mname",
  "User_Lname",
  "Contact_1",
  "Contact_2",
  "Imagedata",
];
const ReportData = [
  "Image",
  "email",
  "Fname",
  "Mname",
  "Lname",
  "Gender",
  "Age",
  "City",
  "State",
  "Zip",
  "User_Fname",
  "User_Mname",
  "User_Lname",
  "Relation",
  "Contact_1",
  "Contact_2",
  "Imagedata",
];

mongoose
  .connect("mongodb://localhost/finder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Child_Process Connected to MongoDB..."))
  .catch(() => console.error("Could not connect to MongoDB..."));

process.on("message", async (req) => {
  try {
    let jsonResponse;
    if (req.Signal === "Post") {
      delete req.Signal;
      jsonResponse = await faceApi_PostMethod(req);
    } else {
      delete req.Signal;
      jsonResponse = await faceApi_PutMethod(req);
    }
    process.send(jsonResponse);
    process.exit();
  } catch (error) {
    console.error(error);
  }
});

const { Canvas, Image } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image });
faceapi.env.monkeyPatch({ fetch: fetch });

async function faceDetection(req) {
  try {
    //loading Api
    await faceapi.nets.faceRecognitionNet.loadFromDisk(
      "public/models/face_recognition_model-weights_manifest.json"
    );
    await faceapi.nets.faceLandmark68Net.loadFromDisk(
      "public/models/face_landmark_68_model-weights_manifest.json"
    );
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(
      "public/models/ssd_mobilenetv1_model-weights_manifest.json"
    );

    //detecting dots in image
    const labels = req.email;
    const img = await canvas.loadImage(req.Image);
    const detections = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
      .withFaceDescriptor();
    // return detections.descriptor;
    return new faceapi.LabeledFaceDescriptors(labels, [detections.descriptor]);
  } catch (ex) {
    console.error(ex);
  }
}

async function faceRecognition(detections, Route) {
  try {
    let labeledDescriptors = [];
    let Result;
    if (Route === "Found") {
      Result = await Reports.find({}).select(" Imagedata");

      await Result.map(async (report) => {
        const label = report.Imagedata.label;
        let Points = new Float32Array(128);
        for (let i = 0; i < 128; i++)
          Points[i] = report.Imagedata.descriptors[0][i];
        const descriptors = [Points];

        labeledDescriptors.push(
          new faceapi.LabeledFaceDescriptors(label, descriptors)
        );
        return labeledDescriptors;
      });
    } else {
      Result = await Founds.find({}).select(" Imagedata");

      await Result.map(async (found) => {
        const label = found.Imagedata.label + ` ${found._id}`;
        let Points = new Float32Array(128);
        for (let i = 0; i < 128; i++)
          Points[i] = found.Imagedata.descriptors[0][i];
        const descriptors = [Points];

        labeledDescriptors.push(
          new faceapi.LabeledFaceDescriptors(label, descriptors)
        );
        return labeledDescriptors;
      });
    }

    //camparing the faces
    if (Result) {
      const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.6);
      let bestMatch;
      if (detections) {
        bestMatch = faceMatcher.findBestMatch(detections._descriptors[0]);
        console.log("This is --> ", bestMatch["_label"]);
        return bestMatch;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

async function faceApi_PostMethod(req) {
  try {
    //calling function for face detection
    const detections = await faceDetection(req);

    //this field is saving data to the dataBase
    let founds = null,
      report;
    req.Imagedata = detections.toJSON();
    if (req.Route === "Found") {
      founds = new Founds(_.pick(req, FoundData));
      await founds.save();
    } else {
      report = new Reports(_.pick(req, ReportData));
      await report.save();
    }

    //calling Missing report database for Imagedata
    const bestMatch = await faceRecognition(detections, req.Route);

    if (bestMatch) {
      //this field is sending SMS to phone
      if (!_.startsWith(bestMatch.toString(), "unknown")) {
        await saveNotificationToDB(
          bestMatch,
          req.Route,
          req.email,
          founds ? founds["_id"] : null
        );
      }
    }

    return "done";
  } catch (ex) {
    fs.unlinkSync(req.Image);
    console.error(ex);
    return "Something failed";
  }
}

async function faceApi_PutMethod(req) {
  try {
    if (typeof req.Image !== "undefined") {
      // removing the stored image
      let founds = null;
      if (req.Route === "Found") {
        founds = await Founds.find({ _id: req.id }).select("Image ");
        fs.unlinkSync(founds[0].Image);
      } else {
        const reports = await Reports.find({ email: req.email }).select(
          "Image "
        );
        fs.unlinkSync(reports[0].Image);
      }
      //calling function for face detection
      const detections = await faceDetection(req);

      //calling Missing report database for Imagedata
      const bestMatch = await faceRecognition(detections, req.Route);

      if (bestMatch) {
        //this field is sending SMS to phone
        if (!_.startsWith(bestMatch.toString(), "unknown")) {
          await saveNotificationToDB(
            bestMatch,
            req.Route,
            req.email,
            founds ? founds["_id"] : null
          );
        }
      }

      //this field is saving data to the dataBase
      req.Imagedata = detections.toJSON();
    }
    if (req.Route === "Found")
      await Founds.updateOne(
        { _id: req.id },
        {
          $set: _.pick(req, FoundData),
        }
      );
    else
      await Reports.updateOne(
        { email: req.email },
        {
          $set: _.pick(req, ReportData),
        }
      );
    return "done";
  } catch (error) {
    fs.unlinkSync(req.Image);
    console.error(error);
    return "Something failed";
  }
}
