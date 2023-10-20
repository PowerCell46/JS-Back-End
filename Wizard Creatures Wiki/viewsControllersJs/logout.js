function logoutHandler(req, res) {
    if (req.user === undefined) { // Checking if the user isn't a Guest
        res.render("404", {err: "You are noo Logged in and cannot access the Logout Page!"});
    }

    res.clearCookie('authenticationTokenCookie');

    console.log("Successful logout!");
    
    res.redirect('/');
}


module.exports = logoutHandler;