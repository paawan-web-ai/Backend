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
@route POST /api/user/unfollow/:userid
@description unfollow a user
@access Private
*/
userRouter.post(
  "/unfollow/:username",
  identifyUser,
  userController.unfollowUserController,
);

//pending request

userRouter.get("/pending", identifyUser, userController.getPendingController);

// accept request
userRouter.post(
  "/accept/:requestId",
  identifyUser,
  userController.acceptRequestController,
);

// reject request
userRouter.post(
  "/reject/:requestId",
  identifyUser,
  userController.rejectRequestController,
);

module.exports = userRouter;
