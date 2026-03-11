const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
});

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
