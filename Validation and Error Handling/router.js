const { authForb, authReq, isCreator } = require("./authMiddleware");
const getAboutView = require("./controllers/common/aboutController");
const { getAttachAccessoryView, postAttachAccessoryView } = require("./controllers/accessories/attachAccessory");
const { getCreateAccessoryView, postCreateAccessoryView } = require("./controllers/accessories/createAccessory");
const { getCreateView, postCreateView } = require("./controllers/cubes/createController");
const { getDeleteView, postDeleteView } = require("./controllers/cubes/deleteController");
const { getDetailsView } = require("./controllers/cubes/detailsController");
const { getEditView, postEditView } = require("./controllers/cubes/editController");
const { getErrorView } = require("./controllers/common/errorController");
const { getHomeView, postHomeView } = require("./controllers/common/homeController");
const { getLoginView, postLoginView } = require("./controllers/authentication/loginController");
const getLogout = require("./controllers/authentication/logoutController");
const { getRegisterView, postRegisterView } = require("./controllers/authentication/registerController");

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