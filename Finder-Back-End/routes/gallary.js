const { Reports } = require("../models/missingReport");
const mongoose = require("mongoose");
const imageToBase64 = require("image-to-base64");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let reports = await Reports.find().select(
      "Image Fname Mname Lname Gender Age User_Fname User_Mname User_Lname Contact_1"
    );

    if (reports.length === 0) return res.status(400).send("No Data Avalable");

    for (let i = 0; i < reports.length; i++) {
      const Image = await reports[i]["Image"];
      reports[i]["Image"] = Image;
    }

    res.status(200).send(reports);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something failed");
  }
});

// router.get("/", async (req, res) => {
//   try {
//     let reports = await Reports.find().select(
//       "Image Fname Mname Lname Gender Age User_Fname User_Mname User_Lname Contact_1"
//     );

//     if (reports.length === 0) return res.status(400).send("No Data Available");

//     for (let i = 0; i < reports.length; i++) {
//       // Fetch the image from Cloudinary URL
//       const response = await axios.get(reports[i]["Image"], {
//         responseType: "arraybuffer",
//       });
//       const base64Image = Buffer.from(response.data, "binary").toString(
//         "base64"
//       );
//       reports[i]["Image"] = `data:image/jpeg;base64,${base64Image}`; // Assuming the image is in JPEG format
//     }

//     res.status(200).send(reports);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Something failed");
//   }
// });



module.exports = router;
