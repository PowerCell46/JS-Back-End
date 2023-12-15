const displayError = require("../utils/displayError");


function logoutHandler(req, res) {
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }

    res.clearCookie("authenticationTokenCookie");

    console.log(`User ${req.user.username} successfully logged out!`);

    res.redirect("/");
}


module.exports = logoutHandler;