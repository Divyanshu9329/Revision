const ApiResponse = require("../utils/ApiResponse");
const {Query, QueryResponse} = require("../models");
const {where} = require("sequelize");

const router = require("express").Router();

// router.get("/home",(req,res)=>{
//     res.send("Faculty ROuter................")
// })

router.use((req, res, next) => {
    if(req.loginuser.role != "faculty"){
        res.json(new ApiResponse (false, "Unauthorised access", null, null))
    } else {
        next();
    }
})

router.get("/queries",async(req,res)=>{
    const data = await Query.findAll({
        where: {
            status : 'open',isactive : true
        },
        include : 'student'
    });
    res.json(new ApiResponse(true,"Query Records...",data,null));
})

router.post("/sendanswer/:qid",async(req,res)=>{
    try{
        const obj = req.body;
        obj.responseby = req.loginuser.userid;
        obj.query = req.params.qid;

        const newObj = await QueryResponse.create(obj);
        res.json(new ApiResponse(true,"Answer Saved! ",newObj,null));
    }catch(err){
        res.json(new ApiResponse(true,"Answer Not Saved",null,null));
    }
})

module.exports = router;