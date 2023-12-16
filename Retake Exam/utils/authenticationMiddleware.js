const jwt = require("jsonwebtoken");


async function authenticateUser(req, res, next) {
    const token = req.cookies["authenticationTokenCookie"];
    
    if (token) {
        try {
            const decodedToken = jwt.verify(token, "PowerCell46");

            req.user = decodedToken;
            res.locals.isAuthenticated = true;
        
        } catch {
            res.clearCookie("authenticationTokenCookie");

            return res.status(401).render("404");
        }
    }

    next();
}


module.exports = authenticateUser;