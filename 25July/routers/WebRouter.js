const router = require('express').Router();
const { where } = require('sequelize');
const {User} = require('../models/index');
const ApiResponse = require('../utils/ApiResponse');

const {generateToken} = require('../utils/JWTConfig')

router.post("/register", async (req, res) => {
    try{
        const obj = req.body;
        obj.active_status = true;

        // Server side validation, Password encrypt, email verify (using otp or any verification link)

        await User.create(obj);
        // res.json({msg : "Done"});
        res.json(new ApiResponse(true, "Registration Done", null, null));
    }catch(err){
        res.json(new ApiResponse(false, "Registration Not Done.",null,null))
    }

})

router.post("/login", async (req, res) => {

    const {email, password} = req.body;

    if(email==undefined || email.length==0){
        // res.json({msg : "Email not found !"})
        res.json(new ApiResponse(false, "Email not found", null, null));
    } 
    
    else if (password==undefined || password.length==0) {
        // res.json({msg : "Password not found !"})
        res.json(new ApiResponse(false, "Password not found", null, null));
    } 

    else {
        const userobj = await User.findOne({
            where : {email, password}
        });

        if(userobj == null) {
            // res.json({msg : "email or password invalid !"})
            res.json(new ApiResponse(false, "email or password invalid", null, null));
        } 
        
        else {
            const token = generateToken(userobj.id,userobj.role);
            res.json(new ApiResponse(true, "Login Successfull", {
                name : userobj.name,
                role: userobj.role,
                token
            }, null));
        }
    }    
})

module.exports = router;