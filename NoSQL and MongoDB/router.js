const getAboutView = require("./controllers/aboutController");
const { getAttachAccessoryView, postAttachAccessoryView } = require("./controllers/attachAccessory");
const { getCreateAccessoryView, postCreateAccessoryView } = require("./controllers/createAccessory");
const { getCreateView, postCreateView } = require("./controllers/createController");
const { getDetailsView } = require("./controllers/detailsController");
const { getErrorView } = require("./controllers/errorController");
const { getHomeView, postHomeView } = require("./controllers/homeController");

const router = require("express").Router();


router.route("/")
.get(getHomeView)
.post(postHomeView);


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


router.route("*")
.get(getErrorView);


module.exports = router;