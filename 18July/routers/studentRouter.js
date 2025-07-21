const router = require("express").Router();

var students = [
  { roll: 121, name: "Raj Pandey", age: 23, branch: "IT" },
  { roll: 124, name: "Ram", age: 24, branch: "CS" },
  { roll: 125, name: "Ray", age: 23, branch: "IT" },
  { roll: 126, name: "Pandey", age: 21, branch: "AI" },
];

router.get("/home", (req, res) => {
  res.render("studhome",{students});
});

router.get("/add",(req,res)=>{
    res.render("addStud")
})

router.post("/save",(req,res)=>{
    const obj = req.body;
    // DB insert Query
    students.push(obj);
    res.redirect('/student/home')
})

router.get("/delete",(req,res)=>{
    const {roll} = req.query;
    // DB delete Query
    // var objIndex = students.findIndex(sd=>sd.roll == roll);
    // students.splice(objIndex,1);

    students = students.filter(sd=>sd.roll != roll);

    res.redirect('/student/home');
})

router.get('/delete2/:roll',(req,res)=>{
    const {roll} = req.params;
    students = students.filter(sd=>sd.roll != roll);
    res.redirect('/student/home');

})
router.get('/updateStud',(req,res)=>{
    const obj = req.body;
    //DB Update query
    // students = students.map(sd=>sd.roll == obj.roll?obj:sd);
    res.redirect('/student/home');

})

router.post('/update',(req,res)=>{
    const obj = req.body;
    //DB Update query
    students = students.map(sd=>sd.roll == obj.roll?obj:sd);
    res.redirect('/student/home');

})

module.exports = router;
