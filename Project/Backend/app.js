const express = require('express');
const cors = require('cors');

const webRouter = require('./routers/WebRouter')
const AuthRouter = require('./routers/AuthRouter')

const server = express();
server.use(cors());
server.use(express.json());

server.use("/acrodesk",webRouter)
server.use("/auth",AuthRouter)


server.listen(7979,()=>
{
    console.log("Server Running : http://localhost:7979")
})