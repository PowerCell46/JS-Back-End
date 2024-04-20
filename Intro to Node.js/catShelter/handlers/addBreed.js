const {writeData} = require("../utils/alterData");
const addBreed = require("../views/addBreed");


function addBreedGetHandler(res) {
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.write(addBreed);

    res.end();
}


function addBreedPostHandler(req, res) {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        const formData = new URLSearchParams(body);
    
        const breed = formData.get("breed");

        writeData({name: breed}, "breed");
        
        res.writeHead(302, {
            "Location": "/"
        });

        res.end();
    });
}


module.exports = {addBreedGetHandler, addBreedPostHandler};