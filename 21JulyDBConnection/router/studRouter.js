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

router.get("/add",(req,res)=>
{
    res.render("addstud");
})

router.post("/save",(req,res)=>
{
    const obj = req.body;
    const quStr = `insert into students value(${obj.roll},'${obj.name}','${obj.mobile}','${obj.email}','${obj.branch}',${obj.marks})`;
    
    const cnn = mysql.createConnection({
        host : "localhost",
        port : 3306,
        database : 'acrodb',
        user : 'root',
        password : "divyanshu"
    });
    cnn.query(quStr,(err)=>
    {
        cnn.end(); // Connection Close
        res.redirect("/students/home")
    });
})

router.get("/search",(req,res)=>{
    res.render('search');
})

router.get("/findbybranch/:branch",(req,res)=>{
    const {branch} = req.params;

    const cnn = mysql.createConnection({
        host : "localhost",
        port : 3306,
        database : 'acrodb',
        user : 'root',
        password : "divyanshu"
    });

    cnn.query(`select * from students where branch='${branch}'`, (err, records)=>{
        cnn.end();  // connection closed
        res.json(JSON.stringify(records));  // predefined function to send data in json format 
    });
})

module.exports = router;