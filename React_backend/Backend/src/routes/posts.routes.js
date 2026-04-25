const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/posts.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post(
  "/",
  upload.single("image"),
  postController.CreatePostController,
);

postRouter.get("/get", postController.getPostController);

postRouter.delete("/:id", postController.deletePostController);

module.exports = postRouter;
