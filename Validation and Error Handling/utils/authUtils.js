const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants");


function hashPassword(password) {
    return bcrypt.hash(password, 13);
}


function attachToken(user, res) {
    const token = jwt.sign({
        username: user.username,
        userId: user._id.toString()
    }, JWT_SECRET, {expiresIn: "1d"});

    res.cookie("authToken", token, {httpOnly: true});
}


function validateToken(token) {
    return jwt.verify(token, JWT_SECRET);
}


function validatePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}


function clearCookieToken(res) {
    res.clearCookie("authToken");
}


module.exports = {hashPassword, attachToken, validateToken, validatePassword, clearCookieToken};