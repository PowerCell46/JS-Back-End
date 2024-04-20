const { writeData } = require("../handleData");
const { generateId } = require("../utils");
const { validateCubeData } = require("../validators");


function getCreateView(req, res) {
    res.render("create");
}


function postCreateView(req, res) {
    let {name, description, imageUrl, difficultyLevel} = req.body;

    if (validateCubeData(name, description, imageUrl, Number(difficultyLevel))) {
        writeData({id: generateId(), name, description, imageUrl, difficultyLevel: Number(difficultyLevel)}, res);
    
    } else {
        console.error("Invalid Data!");
    }
}


module.exports = {getCreateView, postCreateView};