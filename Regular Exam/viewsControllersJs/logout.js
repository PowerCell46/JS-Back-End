function logoutHandler(req, res) {
    if (req.user === undefined) {
        return res.render("404", {err: "You are not Logged in so you cannot use the Logout option!"});
    }

    res.clearCookie("authenticationTokenCookie");
    
    console.log(`User ${req.user.username} successfully logged out!`);

    res.redirect("/");
}


module.exports = logoutHandler;