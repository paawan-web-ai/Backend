require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");
app.listen(3000, () => {
  connectToDb();
  console.log("server:3000 is running");
});
