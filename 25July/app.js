const express = require('express');

const webRouter = require('./routers/WebRouter')

const server = express();
server.use(express.json());

server.use("/acrodesk",webRouter)


server.listen(7979,()=>
{
    console.log("Server Running : http://localhost:7979")
})