const express = require("express");
const app = express();
const StudRouter = require('./routers/StudRouter');

app.use(express.json());   // POST Data

app.use("/student",StudRouter);


app.listen(4002,(req,res)=>{
    console.log("Server is running on : http://localhost:4002");
})