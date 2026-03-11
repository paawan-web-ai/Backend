const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");
const app = express();
app.use(express.json());
const multer = require("multer");
const uploadFile = require("./services/storage.service");

app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/notes", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;

  const result = await uploadFile(req.file.buffer);

  const notes = await noteModel.create({
    image: result.url,
    title,
    description,
  });

  res.status(201).json({
    message: "note Created",
    notes,
  });
});

app.get("/api/notes", async (req, res) => {
  const note = await noteModel.find();
  res.status(200).json({
    message: "notes Fetched",
    note,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "note Deleted",
  });
});

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "note updated",
  });
});

module.exports = app;
