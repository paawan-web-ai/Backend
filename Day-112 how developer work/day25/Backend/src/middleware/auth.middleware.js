const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
const redis = require("../config/casche");

async function identifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(404).json({
      message: "Token not Provided",
    });
  }

  // const isTokenBlacklisted = await blacklistModel.findOne({
  //   token,
  // });

  const isTokenBlacklisted = await redis.get(token);

  if (isTokenBlacklisted) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  req.user = decoded;

  next();
}

module.exports = identifyUser;
