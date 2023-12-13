const get404View = require("./viewsControllersJs/404");
const getCatalogView = require("./viewsControllersJs/catalog");
const { getCreateView, createHandler } = require("./viewsControllersJs/create");
const deleteHandler = require("./viewsControllersJs/delete");
const { getDetailsView } = require("./viewsControllersJs/details");
const { getEditView, editHandler } = require("./viewsControllersJs/edit");
const getHomeView = require("./viewsControllersJs/home");
const { getLoginView, loginPostHandler } = require("./viewsControllersJs/login");
const logoutHandler = require("./viewsControllersJs/logout");
const profileHandler = require("./viewsControllersJs/profile");
const { getRegisterView, registerPostHandler } = require("./viewsControllersJs/register");
const signUpHandler = require("./viewsControllersJs/signUp");
const router = require("express").Router();



router.get("/", getHomeView);


router.get("/register", getRegisterView);

router.post("/register", registerPostHandler);



router.get("/login", getLoginView);

router.post("/login", loginPostHandler);



router.get("/logout", logoutHandler);




router.get("/createCourseOffers", getCreateView);

router.post("/createCourseOffers", createHandler);




router.get("/allCourses", getCatalogView);




router.get("/course/:id", getDetailsView);


router.get("/course/edit/:id", getEditView);

router.post("/course/edit/:id", editHandler);


router.get("/course/delete/:id", deleteHandler);


router.get("/course/signUp/:id", signUpHandler);


router.get("/myProfile", profileHandler);



router.get("/404", get404View);

router.get("*", get404View);



module.exports = router;