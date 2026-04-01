const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    unique: [true, "password already exists"],
  },
});

const authModel = mongoose.model("auth", authSchema);

module.exports = authModel;
