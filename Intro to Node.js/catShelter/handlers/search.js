const fs = require("fs/promises");
const { jsonFiles } = require("../constants");
const homePageHtmlTemplate = require("../views/home");


function searchPostHandler(req, res) {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        const formData = new URLSearchParams(body);
    
        const search = formData.get("search");

        fs.readFile(jsonFiles["cat"])
        .then(data => {
            let catsData = JSON.parse(data);
            catsData = catsData.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
            
            res.writeHead(200, {
                "Content-type": "text/html"
            });
        
            res.write(homePageHtmlTemplate(catsData));
    
            res.end();
        })
        .catch(err => console.error(err));
    });
}


module.exports = {searchPostHandler};