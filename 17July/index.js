const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(1111, ()=>{
    console.log("Server is running on port 1111");
})