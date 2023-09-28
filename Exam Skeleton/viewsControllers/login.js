const User = require("../schemas/userSchema");
const bcrypt = require("bcrypt");
const {createToken} = require("./register"); 
const updateNavigation = require('./navigation');


function getLoginView(req, res) {
    res.render("login");
}


async function postLoginHandler(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email});
        
        if (!user) {
            throw new Error("Invalid email or password!");
        }

        const thePasswordIsCorrect = await bcrypt.compare(password, user.password);
        
        if (!thePasswordIsCorrect) {
            throw new Error("Invalid  email or password!");
        }

        console.log(`User found: \n${user.username} with email: ${user.email}`);  ////////////////////////////// printing the current logged user

        const token = await createToken(user._id, user.email, user.username);
        res.cookie("authTokenCookie", token, {httpOnly: true});

        updateNavigation(true, null);
        res.redirect("/");
        
    } catch(err) {
        updateNavigation(false, err.message);
        res.redirect("/login");
    }
}


module.exports = {getLoginView, postLoginHandler}