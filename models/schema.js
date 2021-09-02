const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdOn: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("TodoModel", TodoSchema);
