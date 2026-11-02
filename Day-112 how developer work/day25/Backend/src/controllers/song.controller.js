const songModel = require("../models/song.model");
const id3 = require("node-id3");
const { uploadFile } = require("../services/storage.service");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);
  const { mood } = req.body;

  // 1st songFile will Upload on Imagekit
  //then move on PosterFile

  //   const songFile = await uploadFile({
  //     buffer: songBuffer,
  //     filename: tags.title,
  //     folder: "/cohort-2/moodify/songs",
  //   });

  //   const posterFile = await uploadFile({
  //     buffer: tags.image.imageBuffer,
  //     filename: tags.title + ".jpeg",
  //     folder: "/cohort-2/moodify/posters",
  //   });

  //--------------Optimized-------------------
  // upload both Files together on Imagekit

  const [songFile, posterFile] = await Promise.all([
    uploadFile({
      buffer: songBuffer,
      filename: tags.title,
      folder: "/cohort-2/moodify/songs",
    }),
    uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/cohort-2/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song created successfully",
    song,
  });
}

async function getSong(req, res) {
  const { mood } = req.query;

  const song = await songModel.findOne({
    mood,
  });

  res.status(200).json({
    message: "song fetched successfully",
    song,
  });
}

module.exports = {
  uploadSong,
  getSong,
};
