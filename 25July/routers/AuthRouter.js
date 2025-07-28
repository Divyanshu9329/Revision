const router = require("express").Router();

const adminRouter = require('./AdminRouter');
const hodRouter = require('./HODRouter')
const facultyRouter = require('./FacultyRouter')
const studentRouter = require('./StudentRouter') 

const ApiResponse = require('../utils/ApiResponse')
const {verifyToken} = require('../utils/JWTConfig')

router.use((req,res, next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader == undefined)
        res.json(new ApiResponse(false,"Token Not Found ! ",null,null));
    else{
        const token = authHeader.split(" ")[1];
        verifyToken(token,(err,tokendata)=>{
            if(err)
                res.json(new ApiResponse(false, "Token Invalid or Expired !", null, null));
            else{
                // console.log(tokendata);
                req.loginuser = tokendata;
                next();
            }
        })
    }
})

router.use("/admin",adminRouter);
router.use("/hod",hodRouter);
router.use("/faculty",facultyRouter);
router.use("/student",studentRouter);

module.exports = router;