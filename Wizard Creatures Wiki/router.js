const { getCreateView, createHandler } = require("./viewsControllersJs/create");
const getCatalogView = require("./viewsControllersJs/catalog");
const getHomeView = require("./viewsControllersJs/home");
const { getLoginView, loginHandler } = require("./viewsControllersJs/login");
const logoutHandler = require("./viewsControllersJs/logout");
const { getRegisterView, registerHandler } = require("./viewsControllersJs/register");
const get404View = require("./viewsControllersJs/404");
const getDetailsView = require("./viewsControllersJs/details");
const { getEditView, editHandler } = require("./viewsControllersJs/edit");
const deleteHandler = require("./viewsControllersJs/delete");
const buyHandler = require("./viewsControllersJs/buy");
const { getSearchView, searchHandler } = require("./viewsControllersJs/search");



const router = require("express").Router();



router.get("/", getHomeView);



router.get('/404', get404View);



router.get("/register", getRegisterView);

router.post("/register", registerHandler);



router.get("/login", getLoginView);

router.post('/login', loginHandler);



router.get("/logout", logoutHandler);



router.get("/create", getCreateView);

router.post("/create", createHandler);



router.get("/catalog", getCatalogView);



router.get("/details/:id", getDetailsView);



router.get("/edit/:id", getEditView);

router.post("/edit/:id", editHandler);



router.get("/delete/:id", deleteHandler);



router.get('/buy/:id', buyHandler);



router.get("/search", getSearchView);

router.post("/search", searchHandler)



module.exports = router;