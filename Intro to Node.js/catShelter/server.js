const http = require("http");
const PORT = 5000;
const homeHandler = require("./handlers/home");
const { addBreedGetHandler, addBreedPostHandler } = require("./handlers/addBreed");
const stylesHandler = require("./handlers/styles");
const { addCatGetHandler, addCatPostHandler } = require("./handlers/addCat");


const server = http.createServer((req, res) => {
    const {url, method} = req;

    console.log(url, method);

    switch (url) {
        case ("/"):
            homeHandler(res);
            break;
        
        case ("/cats/add-cat"):
            method === "GET" ? addCatGetHandler(res) : addCatPostHandler(req, res);
            break;
        
        case ("/cats/add-breed"):
            method === "GET" ? addBreedGetHandler(res) : addBreedPostHandler(req, res);
            break;
        
        case ("/content/styles/site.css"):
            stylesHandler(res);
            break;
    } 

    res.end();
});


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));