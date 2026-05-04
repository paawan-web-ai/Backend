const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const { identifyUser } = require("../middlewares/auth.middleware");

/*
@route POST / api/user/follow/:userid
@description Follow a user
@access private
*/
userRouter.post(
  "/follow/:username",
  identifyUser,
  userController.followUserController,
);

/*
@route POST /api/user/follow/:userid
@description unfollow a user
@access Private
*/
userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);
module.exports = userRouter;
