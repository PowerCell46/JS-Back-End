// const { readAllData, readFilteredData } = require("../handleData");
const Cube = require("../models/Cube");
const { filterHomeViewCubes } = require("../utils");


function getHomeView(req, res) {
    // readAllData("index", res);

    Cube.find().lean()
    .then(data => {
        data = data.map(data => ({...data, _id: data._id.toString()}));
        res.render("index", {cubes: data});
    });
}


function postHomeView(req, res) {
    let {search, from, to} = req.body;
    from = Number(from); 
    to = Number(to);

    filterHomeViewCubes(search, from, to, res);
}


module.exports = {getHomeView, postHomeView};