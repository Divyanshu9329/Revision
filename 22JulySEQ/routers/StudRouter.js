const router = require("express").Router();

const {Student} = require('../models/index');

// REST API : GET, PUT, POST, DELETE

// to get all the info or students
router.get("/list",async(req,res)=>{
    const data = await Student.findAll();
    res.json(data);
});

router.get("/get/:id",async(req,res)=>{
    const {id} = req.params;
    const ob = await Student.findByPk(id);
    if(ob == null){
        res.json({msg: "Student Not Found"});
    }
    else{
        res.json(ob);
    }
});


// to add into DB we will use post

router.post("/save",async(req,res)=>{

    const ob = req.body;
    // console.log(ob);
    const newObj = await Student.create(ob);
    // console.log(newObj);
    res.json({msg: "Student Saved...."});

})

// to delete from the DB
router.delete("/delstud/:id",async(req,res)=>{
    const {id} = req.params;
    const ob = await Student.findByPk(id);
    if(ob == null){
        res.json({msg: "Student Not Found"});
    }
    else{
        await ob.destroy();
        res.json({msg: "Object deleted..."});
    }
})

// when we record the complete record or pure record ko update the use 'put'
// when want to update certain thing the use 'Patch'

router.put("/update/:id",async(req,res)=>{
    const data = req.body;
    const {id} = req.params;

    await Student.update(data,{
        where : {id}
    });
    res.json({msg: "Student Updated Successfully in PUT"});
})

router.patch("/editMarks/:id",async(req,res)=>{
    const {marks} = req.body;
    const {id} = req.params;
    const ob = await Student.findByPk(id);
    if(ob == null){
        res.json({msg: "Student Not Found"});
    }
    else{
        ob.marks = marks;
        await ob.save();
        res.json({msg: "Student marks updated.."});
    }
})

module.exports = router;