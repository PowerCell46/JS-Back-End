const { authForb, authReq, isCreator } = require("./authMiddleware");
const getAboutView = require("./controllers/aboutController");
const { getAttachAccessoryView, postAttachAccessoryView } = require("./controllers/attachAccessory");
const { getCreateAccessoryView, postCreateAccessoryView } = require("./controllers/createAccessory");
const { getCreateView, postCreateView } = require("./controllers/createController");
const { getDeleteView, postDeleteView } = require("./controllers/deleteController");
const { getDetailsView } = require("./controllers/detailsController");
const { getEditView, postEditView } = require("./controllers/editController");
const { getErrorView } = require("./controllers/errorController");
const { getHomeView, postHomeView } = require("./controllers/homeController");
const { getLoginView, postLoginView } = require("./controllers/loginController");
const getLogout = require("./controllers/logoutController");
const { getRegisterView, postRegisterView } = require("./controllers/registerController");

const router = require("express").Router();


router.route("/")
.get(getHomeView)
.post(postHomeView);


router.route("/register")
.get(authForb, getRegisterView)
.post(authForb, postRegisterView);


router.route("/login")
.get(authForb, getLoginView)
.post(authForb, postLoginView);


router.get("/logout", authReq, getLogout);


router.get("/about", getAboutView);


router.route("/create/accessory")
.get(authReq, getCreateAccessoryView)
.post(authReq, postCreateAccessoryView);


router.route("/attach/accessory/:id")
.get(authReq, isCreator, getAttachAccessoryView)
.post(authReq, isCreator, postAttachAccessoryView);


router.route("/create")
.get(authReq, getCreateView)
.post(authReq, postCreateView);


router.get("/details/:id", getDetailsView);


router.route("/edit/:id")
.get(authReq, isCreator, getEditView)
.post(authReq, isCreator, postEditView);


router.route("/delete/:id")
.get(authReq, isCreator, getDeleteView)
.post(authReq, isCreator, postDeleteView);


router.route("*").get(getErrorView);


module.exports = router;