const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "user already exist with this eamil"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
