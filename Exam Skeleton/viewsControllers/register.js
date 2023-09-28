const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../schemas/userSchema');
const updateNavigation = require("./navigation");


function getRegisterView(req, res) {
    res.render("register");
}


async function postRegisterHandler(req, res) {
    try {

        let { username, email, password, repeatPassword } = req.body;
        
        if (password !== repeatPassword) {
            throw new Error("Password and Repeat password must match!");
        
        } else if (await User.findOne({username}) || await User.findOne({email})) {
            throw new Error("Username or email not available!");
        }

        password = await hashPasswordFunc(password);

        const user = new User({username, email, password});
        await user.save();

        console.log(`Successfully created user: \n${user.username} with email: ${user.email}.`); //////////////////// Logging the created user

        const token = await createToken(user._id, user.email, user.username); 
        res.cookie("authTokenCookie", token, {httpOnly: true});

        updateNavigation(true, null);
        res.redirect("/");
    
    } catch(err) {
        updateNavigation(false, err.message);
        res.redirect("/register");
    }
}


async function hashPasswordFunc(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
} 


async function createToken(_id, email, username) {
    const payload = {_id, email, username}; // This object contains the data you want to include in the JWT
    const secret = "PowerCell46";
    const token = jwt.sign(payload, secret, {expiresIn: "1d"}); // Creating the token 
    return token;
}


module.exports = {getRegisterView, postRegisterHandler, createToken}