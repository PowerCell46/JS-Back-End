const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const router = require("./router");


const app = express(); // Set up Express

app.engine("hbs", handlebars.engine({ extname: "hbs" })); // Configure a template engine - Handlebars, for rendering dynamic content on web pages
app.set("view engine", "hbs"); // Sets the template engine that Express will use to render views when you use the res.render() 

app.use("/static", express.static("public")); // Serve static files from a specified directory
app.use(express.urlencoded({extended: false})); // Middleware for extracting POST data from HTML forms

app.use(cookieParser()); // Parses the cookies to the request so they can be used
app.use(router); // Connect the router to the app

mongoose.set("strictQuery", false); // For avoiding an error message in the console
mongoose.connect(`mongodb://127.0.0.1:27017/crypto`); // CHANGE THE NAME OF THE URL !!!

app.listen(5000, () => console.log("Server is running on Port 5000...")); 