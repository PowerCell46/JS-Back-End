const express = require("express");

const config = require("./configFiles/config");

const app = express();

const viewEngineConfig = require("./configFiles/viewEngine");

const initDatabase = require("./configFiles/db");

viewEngineConfig.setUpViewEngine(app);

const { getCreateCube, postCreateCube } = require("./controllersJS/cubeController");
const { homeHandler } = require("./controllersJS/home");
const { detailsHandler } = require("./controllersJS/details");
const { getCreateAccessory, postCreateAccessory, getAttachAccessory, postAttachAccessory } = require('./controllersJS/accessory');

app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    const { search, from, to } = req.query;
    homeHandler(search, from, to);
    res.render("index");
});


app.get("/about", (req, res) => {
    res.render("about");
});


app.get("/create/accessory", getCreateAccessory);

app.post("/create/accessory", postCreateAccessory);


app.get('/attach/accessory/:id', getAttachAccessory);

app.post('/attach/accessory/:id', postAttachAccessory);


app.get("/create", getCreateCube);

app.post("/create", postCreateCube);


app.get("/details/:id", detailsHandler);


initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port: ${config.PORT}...`)))
    .catch((err) => console.error(err));
