const { validateToken } = require("../utils/authUtils");
const Cube = require("../models/Cube");
const { errorMessageHandler } = require("../utils/utils");


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
            return errorMessageHandler(res, "404", "You cannot access this page!");
        }
    })
    .catch(err => console.error(err));

    next();
}


function authReq(req, res, next) {
    if (!res.locals.isAuthenticated) {
        return errorMessageHandler(res, "register", "Authentication Required!");
    }

    next();
}


function authForb(req, res, next) {
    if (res.locals.isAuthenticated) {
        return errorMessageHandler(res, "index", "You are already authenticated!");
    }

    next();
}


module.exports = {isAuthenticated, authReq, authForb, isCreator};