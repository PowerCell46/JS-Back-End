const {verifyPassword, createToken} = require("../utils/createTokenHashPassVerifyPass");
const User = require("../schemas/user");
const displayError = require("../utils/displayError");


function getLoginView(req, res) {
    if (req.user) {
        return displayError(res, "404", "You are already logged in!");
    }

    res.render("login");
}


async function loginPostHandler(req, res) {
    if (req.user) {
        return displayError(res, "404", "You are already logged in!");
    }

    const {email, password} = req.body;
    
    if (email.length < 10) {
        return displayError(res, "login", "Email must be at least 10 characters!");

    } else if (password.length < 4) {
        return displayError(res, "login", "Password must be at least 4 characters!");
    }

    try {
        const user = await User.findOne({email});
        
        const passwordValidity = await verifyPassword(password, user.password);

        if (!passwordValidity) {
            return displayError(res, 'login', err.message);
        }

        const token = await createToken(user._id, email, user.user);
        res.cookie("authenticationTokenCookie", token, {httpOnly: true});

        console.log(`User: ${user.user} successfully logged in!`);

        res.redirect("/");

    } catch(err) {
        return displayError(res, "login", err.message);
    }
}


module.exports = {getLoginView, loginPostHandler}