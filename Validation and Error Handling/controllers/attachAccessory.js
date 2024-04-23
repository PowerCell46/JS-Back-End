const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");


function getAttachAccessoryView(req, res) {
        Cube.findById(req.params.id).lean()
        .then(cubeData => {
            cubeData = {...cubeData, _id: cubeData._id.toString()};
            Accessory.find({ _id: { $nin: cubeData.accessories } }).lean()
            .then(accessoryData => {
                accessoryData = accessoryData.map(data => ({...data, _id: data._id.toString()}));
                
                res.render("attachAccessory", {cube: cubeData, accessories: accessoryData});
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}


function postAttachAccessoryView(req, res) {
    const {accessory} = req.body;
    const cubeId = req.params.id;

    Cube.findById(cubeId)
    .then(cubeData => {
        if (cubeData.accessories.includes(accessory)) {
            return console.log("You cannot add the same accessory twice!");
        }
        cubeData.accessories.push(accessory);
        return cubeData.save();
        })
        .then(() => res.redirect(`/details/${req.params.id}`))
        .catch(err => console.error(err));
}


module.exports = {getAttachAccessoryView, postAttachAccessoryView};