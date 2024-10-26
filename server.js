const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

// files
const { webRouter } = require("./src/routes/web.routes.js");
const connectDB = require("./src/db/connect.db.js");
const port = process.env.PORT || 4909;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", webRouter);

(async () => {
  await connectDB();
  await app.listen(port, () => {
    console.log("server is listening on port " + port);
  });
})();
