const writeData = require("../utils/writeData");


function createCatHandler(body, res) {
    const formData = new URLSearchParams(body);

    const {name, description, image, breed} = Object.fromEntries(formData);

    writeData({name, description, image, breed}, "cat");
    
    res.writeHead(302, { "Location": "/" });
}


module.exports = createCatHandler;