const { Founds } = require("../models/found");
const { Reports } = require("../models/missingReport");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    console.log("user ", user);
    if (!user) return res.status(400).send("Invalid email or password ");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log("calid ", validPassword);
    if (!validPassword)
      return res.status(400).send("Invalid email or password ");

    let Found = false,
      Report = false;
    const a = await Founds.find({ email: req.body.email });
    const b = await Reports.find({ email: req.body.email });
    if (a.length !== 0) Found = true;
    if (b.length !== 0) Report = true;

    const token = user.generateAuthToken(Found, Report);
    res.send(token);
  } catch (ex) {
    res.status(500).send("Something failed");
  }
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(req);
}

module.exports = router;
