// const { writeData } = require("../../handleData");
// const { generateId } = require("../../utils");
const Cube = require("../../models/Cube");
const { errorMessageHandler } = require("../../utils/utils");
const { validateCubeOrAccessoryData } = require("../../utils/validators");


function getCreateView(req, res) {
    res.render("create");
}


function postCreateView(req, res) {
    let {name, description, imageUrl, difficultyLevel} = req.body;
    name = name.trim(); description = description.trim(); imageUrl = imageUrl.trim(); difficultyLevel = Number(difficultyLevel);

    const validateData = validateCubeOrAccessoryData("Cube", name, description, imageUrl, difficultyLevel);

    if (validateData === true) {
        // writeData({id: generateId(), name, description, imageUrl, difficultyLevel: Number(difficultyLevel)}, res);
        
        Cube.create({name, description, imageUrl, difficultyLevel, creatorId: res.locals.userId})
        .then(() => res.redirect("/"))
    .catch(err => console.error(err)); // notify the user ???

    } else {
        return errorMessageHandler(res, "create", validateData);
    }
}


module.exports = {getCreateView, postCreateView};