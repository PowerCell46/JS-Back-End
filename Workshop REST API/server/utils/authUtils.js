const bcrypt = require("bcrypt");
const { SALT_ROUNDS, TOKEN_SECRET } = require("./constants");
const jwt = require("jsonwebtoken");


function hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
}


function createToken(user) {
    return jwt.sign({userId: user._id, email: user.email}, TOKEN_SECRET);
}


function validatePassword(password, hashedPass) {
    return bcrypt.compare(password, hashedPass);
}

function decodeToken(token) {
    return jwt.decode(token);
}


module.exports = {hashPassword, createToken, validatePassword, decodeToken};