const express = require("express")

const app = express() //server instance create krna

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/about',function(req,res){
    res.send("about page")
})
app.get('/ayush',(req,res)=>{
    res.send("ayush tate")
})

app.get('/home',(req,res)=>{
    res.send("this is home page")
})

app.listen(3000)// server start krna