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
      const Image = await imageToBase64(reports[i]["Image"]);
      reports[i]["Image"] = Image;
    }

    res.status(200).send(reports);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something failed");
  }
});

module.exports = router;
