const updateNavigation = require("./navigation");

async function logoutHandler(req, res) {
    try {
        const token = req.cookies.authTokenCookie;
        
        if (!token) {
            throw new Error("You are not logged in and can't use the logout!");
        }

        res.clearCookie("authTokenCookie");
        console.log("Successfully logged out!");

        updateNavigation(false, null);
        
    } catch(err) {
        updateNavigation(false, err.message);
    }

    res.redirect("/");
}

module.exports = logoutHandler;