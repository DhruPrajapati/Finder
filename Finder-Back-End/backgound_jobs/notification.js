const { notification } = require("../models/notification");
const { Reports } = require("../models/missingReport");
const _ = require("lodash");
const config = require("config");
const fast2sms = require("fast-two-sms");

// ---------------This Field is For notifications----------------
async function notifyUser(Contact_no) {
  try {
    console.log(`sending notification to ${Contact_no}...`);
    return fast2sms.sendMessage({
      authorization: config.get("SMS_API_Key"),
      message: "We Found The Match Check Notification In Our App",
      numbers: [`${Contact_no}`],
    });
  } catch (error) {
    console.error(error);
  }
}

async function saveNotificationToDB(bestMatch, Route, Email, FoundID) {
  //------------storing match to database-----------
  try {
    let notify, Contact_no;
    if (Route === "Found") {
      notify = new notification({
        email: bestMatch["_label"],
        MatchWith: Email,
        MatchWithID: FoundID,
      });
      Contact_no = await Reports.find({ email: bestMatch["_label"] }).select(
        " Contact_1"
      );
    } else {
      const label = bestMatch["_label"].split(" ");
      notify = new notification({
        email: Email,
        MatchWith: label[0],
        MatchWithID: label[1],
      });
      Contact_no = await Reports.find({ email: Email }).select(" Contact_1");
    }
    await notify.save();

    //this field is sending SMS to phone
    // return notifyUser(Contact_no[0].Contact_1); // to send Notification Uncomment this
  } catch (error) {
    console.error(error);
  }
}

exports.notifyUser = notifyUser;
exports.saveNotificationToDB = saveNotificationToDB;
