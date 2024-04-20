const {writeData} = require("../utils/alterData");
const createCatView = require("../views/addCat");
const fs = require("fs/promises");


function addCatGetHandler(res) {
    fs.readFile("data/breeds.json", {encoding: "utf8"})
    .then(data => {
        const breedsData = JSON.parse(data);

        res.writeHead(200, {
            "Content-type": "text/html"
        });
        res.write(createCatView(breedsData));

        res.end();
    })
    .catch(err => console.error(err));
}


function addCatPostHandler(req, res) {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        const formData = new URLSearchParams(body);

        const {name, description, image, breed} = Object.fromEntries(formData);

        writeData({name, description, image, breed}, "cat");

        res.writeHead(302, { "Location": "/" });

        res.end();
    });
}


module.exports = {addCatGetHandler, addCatPostHandler};