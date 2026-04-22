const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMG_KEY,
});

async function createImg(buffer) {
  // req.file.buffer contains the uploaded image’s raw binary data created by Multer.
  // You pass this buffer to ImageKit, which converts it into a file and uploads it.
  let imgCreate = await imagekit.files.upload({
    file: await toFile(buffer, "file"),
    fileName: "Test",
  });
  return imgCreate;
}

module.exports = createImg;
