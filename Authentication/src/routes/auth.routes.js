const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
//To store password in 'Hash' 1
const crypto = require("crypto");

//token 2
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "with this email user already exist..",
    });
  }

  const user = await userModel.create({
    name,
    email,
    //convert password to hash 1
    password: crypto.createHash("sha256").update(password).digest("hex"),
  });
  // jwt create 2
  const token = jwt.sign(
    {
      //it need user unique data like ID,EMail
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }, // This is token validation how long a user can request on sever using this token
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user registered",
    user,
  });
});

authRouter.get("/get-me", async (req, res) => {
  // (req.cookies.token) you will get token
  const token = req.cookies.token;

  // to get data from token or to verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   console.log(decoded)
  const user = await userModel.findById(decoded.id);

  res.json({
    name: user.name,
    email: user.email,
  });
});

//you get new token by login api

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  //as pain text password cant be compared
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const isPasswordValid = hash === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  res.cookie("token", token);

  res.json({
    message: "user logged in successfully",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

module.exports = authRouter;
