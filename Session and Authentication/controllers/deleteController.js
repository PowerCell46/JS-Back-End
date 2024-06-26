const Cube = require("../models/Cube");
const { calculateSelectedOption } = require("../utils");


function getDeleteView(req, res) {
    const cubeId = req.params.id;

    Cube.findById(cubeId)
    .lean()
    .then(data => {
        data = {...data, _id: data._id.toString()};
        const selectedObj = calculateSelectedOption(data);

        res.render("delete", {cube: data, selectedObj});
    })
    .catch(err => console.error(err));
}


function postDeleteView(req, res) {
    const cubeId = req.params.id;

    Cube.findByIdAndDelete(cubeId)
    .then(() => res.redirect("/"))
    .catch(err => console.error(err));
}


module.exports = {getDeleteView, postDeleteView};