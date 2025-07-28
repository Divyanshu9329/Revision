const router = require("express").Router();

router.get("/home",(req,res)=>{
    res.send("Admin ROuter................")
})

module.exports = router;