const authModel = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function registerController(req, res) {
  const { username, email, password } = req.body;
  const isUserAlreadyExist = await authModel.findOne({
    $or: [{ username }, { email }, { password }],
  });

  if (isUserAlreadyExist) {
    const isEmailTaken = isUserAlreadyExist.email === email;
    const isNameTaken = isUserAlreadyExist.username === username;

    let message = "Registration Failed";
    if (isEmailTaken && isNameTaken) {
      message += "username and email both already exists";
    } else if (isEmailTaken) {
      message += "email is already exists";
    } else {
      message += "name is already exists";
    }

    return res.status(409).json({ message });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await authModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "registered successfully",
    user: {
      username: user.username,
      email: user.email,
      password: user.password,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await authModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(404).json({
      message: "password invalid",
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
    message: "user loggedin successfully",
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
