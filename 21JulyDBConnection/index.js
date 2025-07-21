const express = require("express");
const path = require("path");

const studRouter = require("./router/studRouter");

const app = express();
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded());

app.get("/", (req, res)=>{
    res.redirect("/students/home")
});

app.use("/students",studRouter);

app.listen(3030, ()=>{
    console.log("Server is runnig on prot 3030.");
})