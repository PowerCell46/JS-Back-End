const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const router = require("./router");
const authenticateUser = require("./utils/authenticationMiddleware");


const app = express();


app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");


app.use("/static", express.static("public"));
app.set("views", `${__dirname}\\viewsHandlebars`); 
app.use(express.urlencoded({extended: false}));


app.use(cookieParser());
app.use(authenticateUser);
app.use(router);



mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/courseBook");
// mongoose.set('debug', true);



app.listen(3000, () => console.log('Server is listening on Port 3000...'));


