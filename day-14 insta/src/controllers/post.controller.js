const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMG_KEY,
});

async function createPostController(req, res) {
  //   console.log(req.body, req.file);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort-2-insta-clone-post",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
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
  const userId = req.user.id;
  const postId = req.params.postId;

  const postdetails = await postModel.findById(postId);

  if (!postdetails) {
    return res.status(404).json({
      message: "Post not found",
    });
  }
  // postdetails.user.toString() = the owner of the post
  // userId = the person who is currently logged in
  const isValidUser = postdetails.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden content.",
    });
  }

  res.status(200).json({
    message: "Post fetched successfully",
    postdetails,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetails,
};
