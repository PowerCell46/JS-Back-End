const getAboutView = require("./controllers/aboutController");
const { getCreateView, postCreateView } = require("./controllers/createController");
const { getDetailsView } = require("./controllers/detailsController");
const { getErrorView } = require("./controllers/errorController");
const { getHomeView, postHomeView } = require("./controllers/homeController");

const router = require("express").Router();


// app.use("/kittens", (req, res, next) => {
//     console.log(`Kittens Middleware has been invoked`);
//     next();
// });


// #region Routing endpoints
// router.get("/", (req, res) => {
//     res.send({
//         name: "Peter",
//         age: 20
//     });
// });


// router.route("/")
// .get((req, res) => {
//     // ... 
// })
// .post((req, res) => {
//     // ...
// })
// .put((req, res) => {
//     // ...
// })
// .delete((req, res) => {
//     // ...
// });


// router.get("/login", () => console.log("LOGIN"));
// #region-end

router.route("/")
.get(getHomeView)
.post(postHomeView);


router.get("/about", getAboutView);


router.route("/create")
.get(getCreateView)
.post(postCreateView);


router.route("/details/:id")
.get(getDetailsView);


router.route("*")
.get(getErrorView);


module.exports = router;