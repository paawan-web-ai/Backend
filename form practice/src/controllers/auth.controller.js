const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    const isEmailTaken = isUserAlreadyExists.email === email;
    const isNameTaken = isUserAlreadyExists.username === username;

    let message = "Registration Failed";

    if (isEmailTaken && isNameTaken) {
      message += "Both Email and Username are already in user.";
    } else if (isEmailTaken) {
      message += "This Email is already registered";
    } else {
      message += "This Username is already taken";
    }
    return res.status(409).json({
      message,
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      user: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User registered",
    user,
    token,
  });
}

async function loginController(req, res) {
  const { identifier, username, email, password } = req.body;

  const loginValue = identifier || username || email;

  const user = await userModel.findOne({
    $or: [{ username: loginValue }, { email: loginValue }],
  });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  const ispasswordValid = await bcrypt.compare(password, user.password);

  if (!ispasswordValid) {
    return res.status(404).json({
      message: "Password Invalid",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user loggedIn sucessfully",
    user: {
      username: user.username,
      email: user.email,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};
