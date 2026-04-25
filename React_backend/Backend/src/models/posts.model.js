const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
});

const listModel = mongoose.model("lists", listSchema);

module.exports = listModel;
