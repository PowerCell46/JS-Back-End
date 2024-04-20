const fs = require("fs/promises");
const shelterCatHtmlTemplate = require("../views/catShelter");
const { deleteData } = require("../utils/alterData");


function shelterCatGetHandler(res, catId) {
    fs.readFile("data/cats.json", {encoding: "utf8"})
        .then(data => {
            const catData = JSON.parse(data)[catId];

            res.writeHead(200, {
                "Content-type": "text/html"
            });
            res.write(shelterCatHtmlTemplate(catData, catId));

            res.end();    
        });
}


function shelterCatPostHandler(res, catId) {
    deleteData("cat", catId);

    res.writeHead(302, { "Location": "/" });

    res.end();
}


module.exports = {shelterCatGetHandler, shelterCatPostHandler};