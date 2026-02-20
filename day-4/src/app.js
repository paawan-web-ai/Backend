const express  = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})


const notes = []

app.post('/notes',(req,res)=>{
    // console.log(req.body)
    res.send("notes created")
    notes.push(req.body)
    console.log(notes)
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})


//delete
app.delete('/notes/:index',(req,res)=>{
   delete notes[req.params.index]
    res.send('note deleted')
})

//patch(to update partially)

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].content=req.body.content
    res.send("note updated")
})

module.exports=app;