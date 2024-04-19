const writeData = require("../utils/writeData");


function createBreedHandler(body, res) {
    const formData = new URLSearchParams(body);
    
    const breed = formData.get("breed");

    writeData({name: breed}, "breed");

    res.writeHead(302, { "Location": "/" });
}


module.exports = createBreedHandler