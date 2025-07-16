const express = require("express");
const app = express()
const port = 3000;


app.get("/",(req,res)=>{
    res.write("<h1>Hello everyone</h1>")
    res.write("<h3>How are you</h3>")
    res.send()
})

app.listen(port, ()=>{
    console.log("Server is running on port ",port)
})