// const { readSpecificData } = require("../../handleData");
const Accessory = require("../../models/Accessory");
const Cube = require("../../models/Cube");


function getDetailsView(req, res) {
    // readSpecificData(req.params.id, "details", res);

    Cube.findById(req.params.id).lean()
    .then(data => {
        data = {...data, _id: data._id.toString(), creatorId: data.creatorId.toString()};
        Accessory.find({_id: {$in: data.accessories}}).lean()
        .then(accessoriesData => {
            let isCreator = res.locals.isAuthenticated && res.locals.userId === data.creatorId;

            res.render("details", {cube: data, accessories: accessoriesData, isCreator});
        })
        .catch(err => console.error(err)); // notify the user ???
    })
    .catch(err => console.error(err)); // notify the user ???
}


module.exports = {getDetailsView};