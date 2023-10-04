async function logoutHandler(req, res) {
    res.json({ok: true});
    console.log("Logout successful!");
}


module.exports = logoutHandler;