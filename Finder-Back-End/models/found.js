const Joi = require("joi");
const mongoose = require("mongoose");

const FoundSchema = new mongoose.Schema({
  Image: {
    type: String,
    required: true,
  },
  Imagedata: {},
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  Fname: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  Mname: {
    type: String,

    minlength: 3,
    maxlength: 50,
  },
  Lname: {
    type: String,

    minlength: 3,
    maxlength: 50,
  },
  Gender: {
    type: String,
    minlength: 4,
    maxlength: 50,
  },
  Age: {
    type: Number,
  },
  User_Fname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  User_Mname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  User_Lname: {
    type: String,
    required: true,
    minlengtdh: 3,
    maxlength: 50,
  },
  Contact_1: {
    type: Number,
    required: true,
  },
  Contact_2: {
    type: Number,
  },
});

const founds = mongoose.model("Found", FoundSchema);

function validateFound(founds) {
  const schema = Joi.object({
    id: Joi.string(),
    Image: Joi.string(),
    Imagedata: Joi.object(),
    email: Joi.string().email().required(),
    Fname: Joi.string().min(3).max(50),
    Mname: Joi.string().min(3).max(50),
    Lname: Joi.string().min(3).max(50),
    Gender: Joi.string().min(3).max(50),
    Age: Joi.number(),
    User_Fname: Joi.string().min(3).max(50).required(),
    User_Mname: Joi.string().min(3).max(50).required(),
    User_Lname: Joi.string().min(3).max(50).required(),
    Contact_1: Joi.number(),
    Contact_2: Joi.number(),
  });
  return schema.validate(founds);
}

exports.Founds = founds;
exports.validate = validateFound;
