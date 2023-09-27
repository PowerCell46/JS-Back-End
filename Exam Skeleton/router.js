const router = require("express").Router();
const {getHomeView} = require("./viewsControllers/home");
const {getLoginView,  postLoginHandler} = require("./viewsControllers/login");
const {getRegisterView, postRegisterHandler} = require("./viewsControllers/register");
const logoutHandler = require("./viewsControllers/logout"); 
const get404View = require('./viewsControllers/404');


router.get("/", getHomeView);


router.get("/login", getLoginView);

router.post("/login", postLoginHandler);


router.get("/register", getRegisterView);

router.post("/register", postRegisterHandler);


router.get("/logout", logoutHandler);


router.get('/404', get404View);


module.exports = router;