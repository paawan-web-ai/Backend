require("dotenv").config()

const mongoose = require("mongoose")

const app = require("./src/app")

const connectToData = require("./src/config/database")

connectToData()

app.listen(3000,()=>{
    console.log("server:3000 starting")
})


