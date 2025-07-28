const router = require("express").Router();

router.get("/home",(req,res)=>{
    res.send("Faculty ROuter................")
})

module.exports = router;