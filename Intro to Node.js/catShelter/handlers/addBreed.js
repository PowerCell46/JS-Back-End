const addBreed = require("../views/addBreed");
const createBreedHandler = require("./createBreed");


function addBreedGetHandler(res) {
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.write(addBreed);
}


function addBreedPostHandler(req, res) {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        createBreedHandler(body, res);
    });

    res.writeHead(302, {
        "Location": "/"
    });
}


module.exports = {addBreedGetHandler, addBreedPostHandler};