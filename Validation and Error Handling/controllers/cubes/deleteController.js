const Cube = require("../../models/Cube");
const { calculateSelectedOption } = require("../../utils/utils");


function getDeleteView(req, res) {
    const cubeId = req.params.id;

    Cube.findById(cubeId)
    .lean()
    .then(data => {
        data = {...data, _id: data._id.toString()};
        const selectedObj = calculateSelectedOption(data);

        res.render("delete", {cube: data, selectedObj});
    })
    .catch(err => console.error(err)); // notify the user ???
}


function postDeleteView(req, res) {
    const cubeId = req.params.id;

    Cube.findByIdAndDelete(cubeId)
    .then(() => res.redirect("/"))
    .catch(err => console.error(err)); // notify the user ???
}


module.exports = {getDeleteView, postDeleteView};