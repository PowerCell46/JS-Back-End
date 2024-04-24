const express = require("express");
const router = require("./router");
const { APP_PORT, DB_CONNECTION_STR, DB_COURSE } = require("./constants");
const handlebars = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { isAuthenticated } = require("./middlewares/authMiddleware");


app.use(express.urlencoded({extended: false})); // parses the sent data


app.use(express.static("public")); // add the path to the static files


app.engine("hbs", handlebars.engine({extname: "hbs"}));


app.set("view engine", "hbs");


// extracts the cookie data from the request headers, parses it, and then makes it available in the req.cookies
app.use(cookieParser()); 


app.use(isAuthenticated); 


app.use(router);


mongoose.connect(`${DB_CONNECTION_STR}/${DB_COURSE}`);


app.listen(APP_PORT, () => console.log(`App is listenig on port ${APP_PORT}...`));