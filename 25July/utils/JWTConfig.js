const jwt = require("jsonwebtoken");

const secretKey = "alkjsdfkljasdfklj"

function generateToken(){
    const token = jwt.sign({userid,role}, secretKey,{
        expiresIn: '5m'
    });
    return token;
}

module.exports = {generateToken};