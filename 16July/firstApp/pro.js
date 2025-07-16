const { closeDelimiter } = require("ejs");
const express = require("express")
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render('home');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/contact.html",(req,res)=>{
    res.render('contact');
})

app.listen(4000, ()=>{
    console.log("Server is runnign....")
})