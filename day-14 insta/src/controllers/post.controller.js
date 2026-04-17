const postModel = require("../models/post.model");
const identifyUser = require("../middlewares/auth.middleware");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone-post",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: requser.id,
  });
  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function getPostDetails(req, res) {
  const userID = req.user.id;
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

  res.status(200).json({
    message: "post fetched successfully.",
    postdetails,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetails,
};
