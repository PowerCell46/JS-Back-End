const User = require("../configFiles/schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;
const updateNavigation = require("./navigation");

async function login(req, res) {
    res.render("login");
}


async function loginHandler(req, res) {
    const userId = req.cookies.authenticationCookieToken;
    if (userId !== undefined) {
        updateNavigation(req, "You are currently logged in!");
        return res.render("home");
    }

    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        updateNavigation(req, "No such user was found!");
        return res.render("login");
    }
    const thePasswordIsCorrect = await bcrypt.compare(password, user.password);

    if (!thePasswordIsCorrect) {
        updateNavigation(req, "Incorrect email or password!");
        return res.render("login");
    }

    const payload = { username: user.username }
    const token = jwt.sign(payload, secret, {expiresIn: "1d" });
    res.cookie("authenticationCookieToken", token, {httpOnly: true});

    console.log("Login successful!");
    // res.cookie("authenticationCookie", user._id, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });
    updateNavigation(req);
    res.redirect('/');
};

module.exports = { login, loginHandler }