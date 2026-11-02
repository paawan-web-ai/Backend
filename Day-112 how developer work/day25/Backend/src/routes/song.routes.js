const { Router } = require("express");
const songRouter = Router();
const upload = require("../middleware/upload.middleware");
const { uploadSong, getSong } = require("../controllers/song.controller");

songRouter.post("/", upload.single("song"), uploadSong);

songRouter.get("/", getSong);

module.exports = songRouter;
