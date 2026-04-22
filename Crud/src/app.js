const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const createImg = require("../src/service/service");
const postModel = require("./models/post.model");
app.use(express.json());

app.post("/api/posts", upload.single("image"), async (req, res) => {
  const data = await createImg(req.file.buffer);

  const { title, description, imgUrl } = req.body;

  const post = await postModel.create({
    title,
    description,
    imgUrl,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
});

app.get("/api/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "Post fetched successfully",
    posts,
  });
});

app.delete("/api/posts/:id", async (req, res) => {
  const id = req.params.id;
  await postModel.findOneAndDelete(id);

  res.status(200).json({
    message: "Post deleted successfully",
  });
});

app.patch("/api/posts/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  await postModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "post updated successfully",
  });
});

module.exports = app;
