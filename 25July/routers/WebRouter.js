const router = require('express').Router();
const {User} = require('../models/index');

router.post("/register",async (req,res)=>
{
    const obj = req.body;
    obj.active_status = true;

    // Server Side Validation , Password Encrypt , Email Verify

    await User.create(obj);
    res.json({msg : "Done"});
});

router.post("/login",async (req,res)=>
{
    const {email,password} = req.body;
    if(email==undefined || email.length==0)
        res.json({msg : "Email Not Found !"})
    else if(password==undefined || password.length==0)
            res.json({msg : "Password Not Found !"})
        else
        {
            const userobj = await User.findOne({
                where : {email,password}
            });
            if(userobj==null)
                res.json({msg : "Email or Password Invalid !"})
            else
                res.json({msg : "Login Success !"})
        }
})

module.exports = router;