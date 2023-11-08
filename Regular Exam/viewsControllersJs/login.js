const { verifyPassword, createToken } = require("../createTokenHashPassVerifyPass");
const User = require("../schemas/user");


function getLoginView(req, res) {
    if (req.user !== undefined) {
        return res.render("404", {err: "You are already logged in and you are not allowed to access the Login Page!"});
    }

    res.render("login");
} 


async function loginHandler(req, res) {
    if (req.user !== undefined) {
        return res.render("404", {err: "You are already logged in and you are not allowed to access the Login Page!"});
    }

    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        
        const passwordValidity = await verifyPassword(password, user.password);
        console.log(passwordValidity);
        if (passwordValidity) {
            const token = createToken(user._id, email, user.user);

            res.cookie("authenticationTokenCookie", token, {httpOnly: true});

            console.log(`User: ${user.user} successfully logged in!`);

            res.redirect("/");
        } else {
            return res.render("login", {err: "Invalid email or password!"});    
        }
    
    } catch(err) {

        return res.render("login", {err: err.message});
    }
}


module.exports = {getLoginView, loginHandler};
