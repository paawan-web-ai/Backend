const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/iz015lb8g/847969.png?updatedAt=1777045017795",
  },
});
const userModel = mongoose.model("user", userShema);

module.exports = userModel;
