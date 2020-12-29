const users = require("./routes/user");
const auth = require("./routes/auth");
const notification = require("./routes/notification");
const foundlist = require("./routes/foundList");
const missingReports = require("./routes/missingReports");
const found = require("./routes/found");
const gallary = require("./routes/gallary");
const mongoose = require("mongoose");
const config = require("config");
const morgan = require("morgan");
const express = require("express");
const app = express();
const cors = require("cors");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR:jwtPrivateKey is not defined.");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/finder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(() => console.error("Could not connect to MongoDB..."));

app.use(morgan("dev"));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/found", found);
app.use("/api/missingreports", missingReports);
app.use("/api/notification", notification);
app.use("/api/foundlist", foundlist);
app.use("/api/gallary", gallary);

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`Listening on port ${port}...`));
