const Cube = require("../../models/Cube");
const { calculateSelectedOption, errorMessageHandler } = require("../../utils");
const { validateCubeOrAccessoryData } = require("../../validators");


function getEditView(req, res) {
    const cubeId = req.params.id;

    Cube.findById(cubeId)
    .lean()
    .then(data => {
        data = {...data, _id: data._id.toString()};
        const selectedObj = calculateSelectedOption(data);
        
        res.render("edit", {cube: data, selectedObj});
    })
    .catch(err => console.error(err)); // notify the user ???
}


function postEditView(req, res) {
    let {name, description, imageUrl, difficultyLevel} = req.body;
    name = name.trim(); description = description.trim(); imageUrl = imageUrl.trim(); difficultyLevel = Number(difficultyLevel);
    
    const validateData = validateCubeOrAccessoryData("Cube", name, description, imageUrl, difficultyLevel);

    if (validateData === true) {
        Cube.findByIdAndUpdate(req.params.id, { name, description, imageUrl, difficultyLevel })
        .then(() => res.redirect(`/details/${req.params.id}`))
        .catch(err => console.error(err)); // notify the user ???
        
    } else {
        return errorMessageHandler(res, "edit", validateData);
    }
}


module.exports = {getEditView, postEditView};