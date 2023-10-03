const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


async function hashPasswordFunc(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
} 


async function createToken(_id, email) {
    const payload = {_id, email}; // This object contains the data you want to include in the JWT
    const secret = "PowerCell46";
    const token = jwt.sign(payload, secret, {expiresIn: "1d"}); // Creating the token 
    return token;
}


module.exports = { hashPasswordFunc, createToken }