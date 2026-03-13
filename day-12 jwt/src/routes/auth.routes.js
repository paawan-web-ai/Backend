const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const authRoutes = express.Router();

authRoutes.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address",
    });
  }

  const user = await userModel.create({
    name,
    password,
    email,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User registered",
    user,
    token,
  });
});

module.exports = authRoutes;
