const express = require("express");
const cors = require("cors");
const router = require("./router");

const mongoose = require("mongoose");

const app = express();


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb://127.0.0.1:27017/furniture`);


app.listen(3030, () => console.log("Server is litening on port 3030..."));