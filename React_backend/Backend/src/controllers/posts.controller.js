const postsModel = require("../models/posts.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMG_KEY,
});

async function CreatePostController(req, res) {
  const files = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
  });
  const { title, description, imgUrl } = req.body;

  const posts = await postsModel.create({
    title,
    description,
    imgUrl: files.url,
  });
  res.status(201).json({
    message: "Note created Successfully",
    posts,
  });
}

async function getPostController(req, res) {
  const post = await postsModel.find();
  res.status(200).json({
    message: "Posts fetched successfully",
    post,
  });
}

async function deletePostController(req, res) {
  const deleteId = req.params.id;
  await postsModel.findByIdAndDelete(deleteId);

  res.status(200).json({
    message: "post deleted successfully",
  });
}

module.exports = {
  CreatePostController,
  getPostController,
  deletePostController,
};
