const User = require("../configFiles/schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;
const updateNavigation = require('./navigation');

async function register(req, res) {
    res.render("register");
}


async function registerHandler(req, res) {
    const userId = req.cookies.authenticationCookieToken;
    if (userId !== undefined) {
        updateNavigation(req, "You are currently logged in!");
        return res.render("home");
    }

    const { username, password, repeatPassword } = req.body;

    const thereIsAPreviousUserWithTheSameUsername = await User.findOne({ username });

    if (thereIsAPreviousUserWithTheSameUsername) {
        updateNavigation(req, "This username is not available!");
        return res.render("register");

    } else if (password !== repeatPassword) {
        updateNavigation(req, "Password and Repeat password must match!");
        return res.render("register");
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let user = new User({ username, password: hashedPassword });
        await user.save();

        const payload = { username: user.username }
        const token = jwt.sign(payload, secret, {expiresIn: "1d" });
        res.cookie("authenticationCookieToken", token, {httpOnly: true});

        console.log("Register successful!");
        // res.cookie("authenticationCookie", user._id, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
        updateNavigation(req);
        res.redirect('home');

    } catch (err) {
        updateNavigation(req, err.message);
        return res.render("404");
    }
}

module.exports = { register, registerHandler }