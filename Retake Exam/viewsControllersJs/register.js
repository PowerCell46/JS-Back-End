const {hashPassword, createToken} = require("../utils/createTokenHashPassVerifyPass");
const User = require("../schemas/user");
const displayError = require("../utils/displayError");



function getRegisterView(req, res) {
    if (req.user) {
        return displayError(res, "404", "You are already logged in!");
    }

    res.render("register");
}



async function registerPostHandler(req, res) {
    if (req.user) {
        return displayError(res, "404", "You are already logged in!");
    }
    
    const {email, username, password, repeatPassword} = req.body;
    
    if (password !== repeatPassword) {
        return displayError(res, "register", "Password and Repeat password must match!");

    } else if (password.length < 4) {
        return displayError(res, "register", "Password must be at least 4 characters!");

    } else if (username.length < 2) {
        return displayError(res, "register", "Username must be at least 2 characters!");
        
    } else if (email.length < 10) {
        return displayError(res, "register", "Email must be at least 10 characters!");
    }

    try {
        const hashedPassword = await hashPassword(password);

        const user = new User({email, user: username, password: hashedPassword});
        user.save();
    
        const token = await createToken(user._id, email, username);
        
        res.cookie("authenticationTokenCookie", token, {httpOnly: true});

        console.log(`User ${user.user} successfully registered!`);

        res.redirect("/");

    } catch(err) {
        return displayError(res, "404", err.message);
    }
}


module.exports = {getRegisterView, registerPostHandler}