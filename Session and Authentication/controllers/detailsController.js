const { readSpecificData } = require("../handleData");
const Accessory = require("../models/Accessory");
const Cube = require("../models/Cube");


function getDetailsView(req, res) {
    // readSpecificData(req.params.id, "details", res);

    Cube.findById(req.params.id).lean()
    .then(data => {
        data = {...data, _id: data._id.toString()};
        Accessory.find({_id: {$in: data.accessories}}).lean()
        .then(accessoriesData => {
            res.render("details", {cube: data, accessories: accessoriesData});
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}


module.exports = {getDetailsView};