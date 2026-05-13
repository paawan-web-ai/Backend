const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  //followerUsername = kon follower kar rha hai
  const followerUsername = req.user.username;
  //followeeUsername = kisko follow kiya ja rha hai
  const followeeUsername = req.params.username;

  const isFolloweeExists = await userModel.findOne({
    // MongoDB.username === followeeUsername
    username: followeeUsername,
  });

  if (!isFolloweeExists) {
    return res.status(404).json({
      message: "User you are trying to follow does not exists",
    });
  }

  if (followeeUsername === followerUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const isALreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (isALreadyFollowing) {
    return res.status(409).json({
      message: `You are already following ${followeeUsername}`,
      follow: isALreadyFollowing,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: `you are following ${followeeUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `You are not following ${followeeUsername}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${followeeUsername}`,
  });
}

/*
GET ALL PENDING REQUESTS
*/
async function getPendingController(req, res) {
  const followeeUsername = req.user.username;

  const pendingRequests = await followModel.find({
    followee: followeeUsername,
    status: "pending",
  });

  if (pendingRequests.length === 0) {
    return res.status(404).json({
      message: "No pending follow requests found",
    });
  }

  return res.status(200).json({
    message: "Pending follow requests fetched successfully",
    follow: pendingRequests,
  });
}

/*
ACCEPT REQUEST
*/
async function acceptRequestController(req, res) {
  const requestId = req.params.requestId;

  const followRequest = await followModel.findById(requestId);

  if (!followRequest) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  followRequest.status = "accepted";

  await followRequest.save();

  return res.status(200).json({
    message: "Follow request accepted",
    follow: followRequest,
  });
}

/*
REJECT REQUEST
*/
async function rejectRequestController(req, res) {
  const requestId = req.params.requestId;

  const followRequest = await followModel.findById(requestId);

  if (!followRequest) {
    return res.status(404).json({
      message: "Follow request not found",
    });
  }

  followRequest.status = "rejected";

  await followModel.findByIdAndDelete(followRequest._id);

  return res.status(200).json({
    message: "Follow request rejected",
    follow: followRequest,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  getPendingController,
  acceptRequestController,
  rejectRequestController,
};
