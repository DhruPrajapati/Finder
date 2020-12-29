const { notification } = require("../models/notification");
const { Founds } = require("../models/found");
const { Reports } = require("../models/missingReport");
const { auth } = require("../middleware/auth");
const mongoose = require("mongoose");
const _ = require("lodash");
const imageToBase64 = require("image-to-base64");
const express = require("express");
const { loadImage } = require("canvas");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    let result = [];
    let Email = decoded.email;
    const Notificaiton = await notification
      .find()
      .or([{ email: Email }, { MatchWith: Email }])
      .select("email MatchWith MatchWithID show");

    if (Notificaiton.length === 0)
      return res.status(400).send("No Data Avalable");

    for (let i = 0; i < Notificaiton.length; i++) {
      if (_.isEqual(Notificaiton[i].email, Email)) {
        result[i] = await Founds.find({
          _id: Notificaiton[i].MatchWithID,
        }).select("email Image Fname Mname Lname Age Gender Contact_1");
        const Image = await imageToBase64(result[i][0].Image);
        result[i][0].Image = Image;
        result[i].push({ show: false });
      } else if (_.isEqual(Notificaiton[i].MatchWith, Email)) {
        if (Notificaiton[i].show) {
          result[i] = await Reports.find({
            email: Notificaiton[i].email,
          }).select("email Image Fname Mname Lname Age Gender Contact_1");
          const Image = await imageToBase64(result[i][0].Image);
          result[i][0].Image = Image;
          result[i].push({ show: true });
        }
      }
    }

    if (result.length === 0) res.status(400).send("No Data Avalable");

    let filtered = result.filter(function (el) {
      return el != null;
    });
    res.status(200).send(filtered);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something failed");
  }
});

router.put("/", auth, async (req, res) => {
  try {
    await notification.updateOne(
      { MatchWithID: req.body.id },
      {
        $set: { show: true },
      }
    );

    res.status(200).send("done");
  } catch (error) {
    console.error(error);
    res.status(400).send("No Data Avalable");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    console.log("this is id  ", req.params.id);
    await notification.deleteOne({
      MatchWithID: req.params.id,
    });

    res.status(200).send("done");
  } catch (error) {
    console.error(error);
    res.status(400).send("No Data Avalable");
  }
});

module.exports = router;
