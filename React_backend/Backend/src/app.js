const express = require("express");
const app = express();
const postRouter = require("./routes/posts.routes");

app.use(express.json());
app.use("/api/posts", postRouter);
module.exports = app;
