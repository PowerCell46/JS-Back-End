const { createToken } = require("../createTokenHashPass");
const User = require("../schemas/UserSchema");
const bcrypt  = require("bcrypt");


function getLoginView(req, res) {
    if (req.user !== undefined) { // Checking if the user isn't already logged in
        return res.render("404", {err: "You are already logged in!"});
    }
    res.render('login');
}


async function loginHandler(req, res) { // Checking if the user isn't already logged in
    if (req.user !== undefined) {
        return res.render("404", {err: "You are already logged in!"});
    }

    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
    
        if (!user) {
            throw new Error("There is no user with the given email!");
        }
        
        const passwordValidity = await bcrypt.compare(password, user.password);
        
        if (!passwordValidity) {
            throw new Error("Email or password incorrect!");
        }

        const token = await createToken(user._id, user.email);
        res.cookie("authenticationTokenCookie", token, {httpOnly: true});

        console.log(`User ${user.email} successfully logged in!`);
        
        res.redirect("/");

    } catch(err) {
        
        res.render('login', {err: err.message});
    }
}


module.exports = {getLoginView, loginHandler};
