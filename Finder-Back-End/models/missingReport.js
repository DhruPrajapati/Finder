const Joi = require("joi");
const mongoose = require("mongoose");

const MissingReportSchema = new mongoose.Schema({
  Image: {
    type: String,
    required: true,
  },
  Imagedata: {},
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  Fname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Mname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Lname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Gender: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Age: {
    type: Number,
    required: true,
  },
  City: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  State: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  Zip: {
    type: Number,
    required: true,
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
  Relation: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  Contact_1: {
    type: Number,
    required: true,
  },
  Contact_2: {
    type: Number,
    required: true,
  },
});

const reports = mongoose.model("MissingReports", MissingReportSchema);

function validateReport(reports) {
  const schema = Joi.object({
    Image: Joi.string(),
    Imagedata: Joi.object(),
    email: Joi.string().email().required(),
    Fname: Joi.string().min(3).max(50).required(),
    Mname: Joi.string().min(3).max(50).required(),
    Lname: Joi.string().min(3).max(50).required(),
    Gender: Joi.string().min(3).max(50).required(),
    Age: Joi.number().required(),
    City: Joi.string().min(3).max(255).required(),
    State: Joi.string().min(3).max(255).required(),
    Zip: Joi.number().required(),
    User_Fname: Joi.string().min(3).max(50).required(),
    User_Mname: Joi.string().min(3).max(50).required(),
    User_Lname: Joi.string().min(3).max(50).required(),
    Relation: Joi.string().min(3).max(50).required(),
    Contact_1: Joi.number().required(),
    Contact_2: Joi.number(),
  });
  return schema.validate(reports);
}

exports.Reports = reports;
exports.MissingReportSchema = MissingReportSchema;
exports.validate = validateReport;
