const { Reports, validate } = require("../models/missingReport");
const { auth } = require("../middleware/auth");
const upload = require("../middleware/uploads");
const mongoose = require("mongoose");
const _ = require("lodash");
const fs = require("fs");
const imageToBase64 = require("image-to-base64");
const express = require("express");
const router = express.Router();
const { fork } = require("child_process");

router.get("/", auth, async (req, res) => {
  try {
    const report = await Reports.find({ email: decoded.email }).select(
      "Image Fname Mname Lname Gender Age City State Zip User_Fname User_Mname User_Lname Relation Contact_1 Contact_2"
    );
    if (report.length === 0) return res.status(400).send("No Data Avalable");

    const Image = await imageToBase64(report[0].Image);
    report[0].Image = Image;

    res.send(report);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something failed");
  }
});

router.post("/", auth, upload.single("Image"), async (req, res) => {
  try {
    req.body.email = decoded.email;
    req.body.Image = req.file.path;

    const { error } = validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      req.body.Signal = "Post";
      req.body.Route = "Reports";
      const childProcess = fork("./backgound_jobs/faceapi.js");
      childProcess.send(req.body);
      childProcess.on("message", (message) => console.log(message));
      res.status(200).send("Done!!!");
    }
  } catch (ex) {
    fs.unlinkSync(req.file.path);
    console.error(ex);
    res.status(500).send("Something failed");
  }
});

router.put("/", auth, upload.single("Image"), async (req, res) => {
  try {
    req.body.email = decoded.email;

    if (typeof req.file !== "undefined") {
      req.body.Image = req.file.path;
    } else {
      req.body.Image = req.file;
    }

    const { error } = validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      req.body.Signal = "Put";
      req.body.Route = "Report";
      const childProcess = fork("./backgound_jobs/faceapi.js");
      childProcess.send(req.body);
      childProcess.on("message", (message) => console.log(message));
      res.status(200).send("Done!!!");
    }
  } catch (ex) {
    // fs.unlinkSync(req.file.path);
    console.error(ex);
    res.status(500).send("Something failed");
  }
});

module.exports = router;
