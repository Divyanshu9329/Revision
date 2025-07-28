const router = require("express").Router();

const adminRouter = require('./AdminRouter');
const hodRouter = require('./HODRouter')
const facultyRouter = require('./FacultyRouter')
const studentRouter = require('./StudentRouter') 

router.use((req,res)=>{
    const authHeader = req.headers.authorization;
})

router.use("/admin",adminRouter);
router.use("/hod",hodRouter);
router.use("/faculty",facultyRouter);
router.use("/student",studentRouter);

module.exports = router;