const fs = require("fs/promises");
const editCatHtmlTemplate = require("../views/editCat");
const { editData } = require("../utils/alterData");


function editCatGetHandler(res, catId) {

    fs.readFile("data/breeds.json", {encoding: "utf8"})
    .then(data => {
        const breedsData = JSON.parse(data);

        fs.readFile("data/cats.json", {encoding: "utf8"})
        .then(data => {
            const catData = JSON.parse(data)[catId];

            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.write(editCatHtmlTemplate(catData, catId, breedsData));

            res.end();    
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}


function editCatPutHandler(req, res, catId) {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        const formData = new URLSearchParams(body);

        const {name, description, image, breed} = Object.fromEntries(formData);

        editData({name, description, image, breed}, "cat", catId);

        res.writeHead(302, { "Location": "/" });

        res.end();
    });
}


module.exports = {editCatGetHandler, editCatPutHandler};