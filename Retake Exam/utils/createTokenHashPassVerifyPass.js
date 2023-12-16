const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


async function hashPassword(password) {
    return await bcrypt.hash(password, 14);
}


async function createToken(_id, email, username) {
    const token = jwt.sign({_id, email, username}, "PowerCell46", {expiresIn: "1d"});
    return token;
}


async function verifyPassword(password, incryptedPassword) {
    return await bcrypt.compare(password, incryptedPassword);
}


module.exports = {hashPassword, createToken, verifyPassword};