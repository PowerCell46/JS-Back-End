const express = require("express");

const config = require("./config");

const app = express();

const viewEngineConfig = require("./config/viewEngine");

viewEngineConfig.setUpViewEngine(app);

const {getCreateCube} = require("./controllers/cubeController")
const {createCube} = require("./addCube");
const {homeHandler} = require("./home");
const {detailsHandler} = require("./details");

app.use(express.static("./public"))
app.use(express.urlencoded({extended: false}));



app.get("/", (req, res) => {
    const {search, from, to} = req.query;
    homeHandler(search, from, to);
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/create", getCreateCube); 

app.post("/create", (req, res) => {
    createCube(req.body);
    res.redirect("/");
});

app.get("/details/:id", detailsHandler)

app.listen(config.PORT, () => console.log(`Server is running on port: ${config.PORT}...`));

