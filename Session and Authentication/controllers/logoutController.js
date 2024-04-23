const { clearCookieToken } = require("../authUtils");


function getLogout(req, res) {
    clearCookieToken(res);

    console.log(`User: ${res.locals.username} successfully logged out!`);

    res.redirect("/");
}


module.exports = getLogout;