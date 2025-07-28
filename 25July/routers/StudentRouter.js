const router = require("express").Router();

router.get("/home",(req,res)=>{
    res.send("Student ROuter................")
})

module.exports = router;