const { User, validate } = require("../models/user");
const { auth } = require("../middleware/auth");
const { Founds } = require("../models/found");
const { Reports } = require("../models/missingReport");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    // console.log(user);
    res.send(user);
  } catch (error) {
    res.status(500).send("Something failed");
  }
});

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.find({ email: req.body.email });
    if (user.length) return res.status(400).send("User already Registered");

    user = new User(_.pick(req.body, ["username", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    let Found = false,
      Report = false;
    const a = await Founds.find({ email: req.body.email });
    const b = await Reports.find({ email: req.body.email });
    if (a.length !== 0) Found = true;
    if (b.length !== 0) Report = true;
    const token = user.generateAuthToken(Found, Report);
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token") //for adding personal header
      .send(_.pick(user, ["_id", "username", "email"]));
  } catch (ex) {
    console.error(ex);
    res.status(500).send("Something failed");
  }
});

module.exports = router;
