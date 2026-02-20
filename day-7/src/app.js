const express = require("express")

const app = express()
const noteModel = require("./models/notes.model")
/*
 POST /notes
 req.body
*/
app.use(express.json())

app.post("/notes", async(req,res)=>{
    const {title,description,age} = req.body

  const note = await noteModel.create({
                 title,description,age
                })

  res.status(201).json({
    message:"notes created successfully",
    note
  })
})

/*
GET /notes
Fetch all the notes data
*/
app.get("/notes", async(req,res)=>{
  const notes = await noteModel.find()

  res.status(200).json({
    message:"Notes fetched successfully",
    notes
  })
})

module.exports=app