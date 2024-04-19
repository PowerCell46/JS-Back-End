const http = require("http");
const PORT = 5000;
const homeHandler = require("./handlers/home");
const { addBreedGetHandler, addBreedPostHandler } = require("./handlers/addBreed");
const stylesHandler = require("./handlers/styles");
const { addCatGetHandler, addCatPostHandler } = require("./handlers/addCat");
const { editCatGetHandler, editCatPutHandler } = require("./handlers/editCat");
const { shelterCatGetHandler, shelterCatPostHandler } = require("./handlers/shelterCat");


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

    if (url.startsWith("/edit/")) {
        const catId = Number(url.split("/")[2]);
        method === "GET" ? editCatGetHandler(res, catId) : editCatPutHandler(req, res, catId);

    } else if (url.startsWith("/shelter/")) {
        const catId = Number(url.split("/")[2]);
        method === "GET" ? shelterCatGetHandler(res, catId) : shelterCatPostHandler(res, catId);
    }

});


server.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));