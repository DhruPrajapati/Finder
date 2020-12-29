const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { Founds } = require("../models/found");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
});

UserSchema.methods.generateAuthToken = function (Found, Missing) {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      Found: Found,
      Missing: Missing,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const user = mongoose.model("User", UserSchema);

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(user);
}

exports.User = user;
exports.validate = validateUser;
