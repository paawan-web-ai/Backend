const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const { identifyUser } = require("../middlewares/auth.middleware");

/*
-POST /api/post [protected]
-req.body={caption,image-file}
*/
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/*
-GET /api/post/[protected]
*/

postRouter.get("/", identifyUser, postController.getPostController);

/*
-GET /api/posts/details/:postid
-return an detail about specific post with the id. also check whether the post belongs to the user that the reques come from
*/

postRouter.get("/details/:postId", identifyUser, postController.getPostDetails);
module.exports = postRouter;
