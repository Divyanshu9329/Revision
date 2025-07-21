const router = require("express").Router();
const mysql = require('mysql2');

router.get("/home",(req,res)=>{
    // connection building
    const cnn = mysql.createConnection({
        host : "localhost",
        port : 3306,
        database : 'acrodb',
        user : 'root',
        password : "divyanshu"
    });

    cnn.query("select * from students", (err, records)=>{
        cnn.end();  // connection closed
        res.render("home",{records});
        // console.log(records)
    });

   // res.render('home')
});

router.get("/add",(req,res)=>{
    
    res.render("addStud");
})

router.post("/save",(req,res)=>{
    const obj = req.body
})

module.exports = router;