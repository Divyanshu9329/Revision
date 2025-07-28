const jwt = require("jsonwebtoken");

const secretKey = "alkjsdfkljasdfklj"

function generateToken(userid,role){
    const token = jwt.sign({userid,role}, secretKey,{
        expiresIn: '5m'
    });
    return token;
}

function verifyToken(token, callback){
    jwt.verify(token, secretKey, (err,tokendata)=>{
        callback(err,tokendata);

    })
}

module.exports = {generateToken,verifyToken};