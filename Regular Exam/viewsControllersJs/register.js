const { hashPassword, createToken } = require("../createTokenHashPassVerifyPass");
const User = require("../schemas/user");


function getRegisterView(req, res) {
    if (req.user !== undefined) {
        return res.render("404", {err: "You are already logged in and you are not allowed to access the Register Page!"});
    }

    res.render("register");
}


async function registerHandler(req, res) {
    if (req.user !== undefined) {
        return res.render("404", {err: "You are already logged in and you are not allowed to access the Register Page!"});
    }

    try {
        const {email, username, password, repeatPassword} = req.body;

        if (password !== repeatPassword) {
            return res.render("register", {err: "Password and Repeat Password must match!"});
        
        } else if (password.length < 4) {
            return res.render("register", {err: "Password must be at least 4 characters long!"});
        
        } else if (username.length < 3) {
            return res.render("register", {err: "Username should be at least 3 characters!"});
        
        } else if (email.length < 10) {
            return res.render("register", {err: "Email should be at least 10 characters!"});
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({email, user: username, password: hashedPassword});
        user.save();

        const token = createToken(user._id, email, username);

        res.cookie("authenticationTokenCookie", token, {httpOnly: true});

        console.log(`User: ${user.user} successfully registered!`);

        res.redirect('/');
    
    } catch(err) {
        
        return res.render("register", {err: err.message});
    } 
}


module.exports = {getRegisterView, registerHandler};