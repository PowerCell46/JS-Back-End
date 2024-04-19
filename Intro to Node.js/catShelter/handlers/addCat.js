const createCatView = require("../views/addCat");
const createCatHandler = require("./createCat");


function addCatGetHandler(res) {
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.write(createCatView());
}


function addCatPostHandler(req, res) {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        createCatHandler(body, res);
    });

    res.writeHead(302, {
        "Location": "/"
    });
}

module.exports = {addCatGetHandler, addCatPostHandler};