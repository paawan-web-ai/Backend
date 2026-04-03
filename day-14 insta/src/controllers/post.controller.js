const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided , unauthorized access",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User",
    });
  }

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone-post",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });
  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  const token = req.cookies.token;
  // to read token's data

  if (!token) {
    return res.status(401).json({
      message: "unAuthorized Access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Token invalid",
    });
  }
  const userId = decoded.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function getPostDetails(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unAuthorized Access",
    });
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const userID = decoded.id;
  const postID = req.params.postID;
  const postdetails = await postModel.findById(postID);

  if (!postdetails) {
    return res.status(404).json({
      message: "post not found.",
    });
  }

  const isValidUser = postdetails.user.toString() === userID;

  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden content.",
    });
  }

  return res.status(200).json({
    message: "post fetched successfully.",
    postdetails,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetails,
};
