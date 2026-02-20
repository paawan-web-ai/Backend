const app = require("./src/app")

const mongoose=require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://COHORT:Th12Pc69iM1us91m@cluster0.tc5uyta.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected to Database")
    })
}
connectToDb()

app.listen(3000,()=>{
    console.log('server:3000 starting...')
})