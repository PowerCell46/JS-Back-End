const express = require("express");
const mongoose = require("mongoose");
const { SERVER_PORT, DB_CONNECTION_STR, WORKSHOP_NAME } = require("./utils/constants");
const cors = require("cors");
const router = require("./router");

const app = express();

app.use(cors());

app.use(express.urlencoded({extended: false})); // parses the sent data

app.use(express.json());

app.use(router);


mongoose.connect(`${DB_CONNECTION_STR}/${WORKSHOP_NAME}`);


app.listen(SERVER_PORT, () => console.log(`Server is live on port ${SERVER_PORT}...`));