var express = require("express");
var app = express();
require("dotenv").config();
const router = require("./routes/route");

const dbconnect = require("./config/db");
var port = process.env.PORT;

app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello VAASU !!");
});

app.listen(port, (req, res) => {
  console.log(`App is running on port:${port}`);
});
