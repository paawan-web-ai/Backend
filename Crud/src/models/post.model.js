const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgUrl: {
    type: String,
    default:
      "https://ik.imagekit.io/iz015lb8g/instagram_practice/Test_rvVRjYmui?updatedAt=1776326440491",
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
