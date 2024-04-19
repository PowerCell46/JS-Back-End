const home = require("../views/home");


function homeHandler(res) {
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.write(home);
}


module.exports = homeHandler;