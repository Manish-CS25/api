var mongoose = require("mongoose");
const URL = process.env.url;
mongoose
  .connect(URL, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Can't connected to database", err);
    process.exit();
  });
