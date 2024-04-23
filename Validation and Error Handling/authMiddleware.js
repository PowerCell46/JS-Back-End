const { validateToken } = require("./authUtils");
const Cube = require("./models/Cube");


function isAuthenticated(req, res, next) {
    const token = req.cookies.authToken;
    // Response.locals is an object that provides a way to pass data from middleware to the route handlers.
    res.locals.isAuthenticated = !!token;

    if (token) {
        const data = (validateToken(token));

        res.locals.username = data.username;
        res.locals.userId = data.userId;
    }
    
    next();
}


function isCreator(req, res, next) {
    Cube.findById(req.params.id)
    .then(cubeData => {
        if (cubeData.creatorId.toString() !== res.locals.userId) {
            return res.redirect("/404");
        }
    })
    .catch(err => console.error(err));

    next();
}


function authReq(req, res, next) {
    if (!res.locals.isAuthenticated) {
        return res.redirect("/register"); // Stop the completion of the view
    }

    next();
}


function authForb(req, res, next) {
    if (res.locals.isAuthenticated) {
        return res.redirect("/"); // Stop the completion of the view
    }

    next();
}


module.exports = {isAuthenticated, authReq, authForb, isCreator};