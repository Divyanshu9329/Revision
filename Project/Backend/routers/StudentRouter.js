const router = require("express").Router();
const ApiResponse = require("../utils/ApiResponse");
const {Query} = require("../models");
const {where} = require("sequelize");

// router.get("/home",(req,res)=>{
//     res.send("Student ROuter................")
// })

router.use((req, res, next) => {
    if(req.loginuser.role != "student"){
        res.json(new ApiResponse (false, "Unauthorised access", null, null))
    } else {
        next();
    }
})

router.post("/askquery",async(req,res)=>{
    try{
        const obj = req.body;
        obj.queryby = req.loginuser.userid;
        obj.status = "open";
        obj.isactive = true;

        const newObj = await Query.create(obj);
        res.json(new ApiResponse(true,"Query Saved ! ",newObj,null))
    }catch(err){
        res.json(new ApiResponse(false,"Query Not Saved",null,null))
    }
})

router.get("/myqueries",async(req,res)=>{
    const queryby = req.loginuser.userid;
    const data = await Query.findAll({
        where : {queryby}
    });
    res.json(new ApiResponse(true,"Query Records !",data,null));
})

module.exports = router;