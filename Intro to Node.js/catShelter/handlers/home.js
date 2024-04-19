const homePageHtmlTemplate = require("../views/home");
const fs = require("fs/promises");


function homeHandler(res) {
    fs.readFile("data/cats.json", {encoding: "utf8"})
    .then(data => {
        const catsData = JSON.parse(data);
        
        res.writeHead(200, {
            "Content-type": "text/html"
        });
    
        res.write(homePageHtmlTemplate(catsData));

        res.end();
    })
    .catch(err => console.error(err));    
}


module.exports = homeHandler;