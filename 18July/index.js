const express = require('express');
const path = require('path');

const calcRouter = require('./routers/BasicRouter');
const studRouter = require('./routers/studentRouter');

const server = express();
server.set('view engine','ejs');
server.use(express.urlencoded()) // Form Data
server.use(express.static(path.join(__dirname,"assets")));

server.get("/",(req,res)=>
{
    res.render('home');
});

server.use("/calc",calcRouter);
server.use("/student",studRouter)

server.listen(7979,()=>
{
    console.log("Server Run : http://localhost:7979")
})