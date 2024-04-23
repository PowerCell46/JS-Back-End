const Cube = require("../models/Cube");
const { calculateSelectedOption } = require("../utils");
const { validateCubeData } = require("../validators");


function getEditView(req, res) {
    const cubeId = req.params.id;

    Cube.findById(cubeId)
    .lean()
    .then(data => {
        data = {...data, _id: data._id.toString()};
        const selectedObj = calculateSelectedOption(data);
        
        res.render("edit", {cube: data, selectedObj});
    })
    .catch(err => console.error(err));
}


function postEditView(req, res) {
    let {name, description, imageUrl, difficultyLevel} = req.body;

    if (validateCubeData(name, description, imageUrl, Number(difficultyLevel))) {
        Cube.findByIdAndUpdate(req.params.id, { name, description, imageUrl, difficultyLevel: Number(difficultyLevel) })
        .then(() => res.redirect(`/details/${req.params.id}`))
        .catch(err => console.error(err));
        
    } else {
        console.error("Invalid Data!");
    }
}


module.exports = {getEditView, postEditView};