const mongoose = require("mongoose");

const Notification = new mongoose.Schema({
  email: String,
  MatchWith: String,
  MatchWithID: String,
  show: {
    type: Boolean,
    default: false,
  },
});

const notification = mongoose.model("Notification", Notification);

exports.notification = notification;
