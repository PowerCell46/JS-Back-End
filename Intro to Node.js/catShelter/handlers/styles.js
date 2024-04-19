const siteCss = require("../content/styles/site");

function stylesHandler(res) {
    res.writeHead(200, {
        "Content-type": "text/css"
    });
    res.write(siteCss);
}

module.exports = stylesHandler;