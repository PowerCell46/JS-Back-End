const getAboutView = require("./controllers/aboutController");
const { getAttachAccessoryView, postAttachAccessoryView } = require("./controllers/attachAccessory");
const { getCreateAccessoryView, postCreateAccessoryView } = require("./controllers/createAccessory");
const { getCreateView, postCreateView } = require("./controllers/createController");
const { getDeleteView, postDeleteView } = require("./controllers/deleteController");
const { getDetailsView } = require("./controllers/detailsController");
const { getEditView, postEditView } = require("./controllers/editController");
const { getErrorView } = require("./controllers/errorController");
const { getHomeView, postHomeView } = require("./controllers/homeController");
const { getRegisterView, postRegisterView } = require("./controllers/registerController");

const router = require("express").Router();


router.route("/")
.get(getHomeView)
.post(postHomeView);


router.route("/register")
.get(getRegisterView)
.post(postRegisterView);


router.get("/about", getAboutView);


router.route("/create/accessory")
.get(getCreateAccessoryView)
.post(postCreateAccessoryView);


router.route("/attach/accessory/:id")
.get(getAttachAccessoryView)
.post(postAttachAccessoryView);


router.route("/create")
.get(getCreateView)
.post(postCreateView);


router.route("/details/:id")
.get(getDetailsView);


router.route("/edit/:id")
.get(getEditView)
.post(postEditView);


router.route("/delete/:id")
.get(getDeleteView)
.post(postDeleteView);


router.route("*")
.get(getErrorView);


module.exports = router;