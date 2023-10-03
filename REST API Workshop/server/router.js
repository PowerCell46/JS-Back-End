const router = require('express').Router();

const registerHandler = require("./views/register");
const loginHandler = require("./views/login");
const logoutHandler = require('./views/logout');
const createFurtnitureHandler = require('./views/create');
const getFurniture = require("./views/dashboard");
const getDetails = require('./views/details');
const deleteHandler = require('./views/delete');
const editHandler = require('./views/edit');


router.post("/users/register", registerHandler);


router.post("/users/login", loginHandler);


router.get("/users/logout", logoutHandler);


router.get("/furnitures/", getFurniture);


router.post("/furnitures/", createFurtnitureHandler);


router.get("/furnitures/:id", getDetails);


router.put("/furnitures/:id", editHandler);


router.delete("/furnitures/:id", deleteHandler);


module.exports = router;