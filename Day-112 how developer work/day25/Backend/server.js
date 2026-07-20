require("dotenv").config();
const app = require("./src/app");
const connectedToDb = require("./src/config/database");
app.listen(3000, () => {
  console.log("server:3000 is running");
  connectedToDb();
});
