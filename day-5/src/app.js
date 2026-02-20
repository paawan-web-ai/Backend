const express = require("express")

const app = express()

app.use(express.json())

const notes = []

//create

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)

    res.status(201).json({
        message:"notes created"
    })
})

//get

app.get("/notes",(req,res)=>{
   res.status(200).json({
    notes:notes
   })
})

//delete
app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]

    res.status(204).json({
        message:"Deleted succesfully"
    })
})

//Patch ("/notes/:index")

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].content = req.body.content

    res.status(200).json({
        message:"note updated succesfully"
    })
})

module.exports=app