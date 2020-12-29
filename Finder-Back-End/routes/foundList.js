const { Founds } = require("../models/found");
const { auth } = require("../middleware/auth");
const mongoose = require("mongoose");
const _ = require("lodash");
const imageToBase64 = require("image-to-base64");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const found = await Founds.find({ email: decoded.email }).select(
      " Image Fname Mname Lname Age Gender "
    );

    if (found.length === 0) return res.status(400).send("No Data Avalable");

    for (let i = 0; i < found.length; i++) {
      const Image = await imageToBase64(found[i].Image);
      found[i].Image = Image;
    }
    res.status(200).send(found);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something failed");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await Founds.deleteOne({
      _id: req.params.id,
    });

    res.status(200).send("done");
  } catch (error) {
    console.error(error);
    res.status(400).send("No Data Avalable");
  }
});

module.exports = router;
