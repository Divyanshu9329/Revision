const router = require("express").Router();

router.get("/home",(req,res)=>{
    res.send("HOD ROuter................")
})

module.exports = router;