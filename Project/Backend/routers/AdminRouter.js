const router = require("express").Router();
const ApiResponse = require('../utils/ApiResponse');

router.use((req,res,next)=>{
    if(req.loginuser.role!='student')
        res.json(new ApiResponse(false,"UnAuthorized Access",null,null));
    else{
        next()
    }
})

router.get("/home",(req,res)=>{
    res.send("Admin ROuter................")
})

module.exports = router;