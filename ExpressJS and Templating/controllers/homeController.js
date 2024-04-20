const { readAllData, readFilteredData } = require("../handleData");


function getHomeView(req, res) {
    readAllData("index", res)
}


function postHomeView(req, res) {
    let {search, from, to} = req.body;
    from = Number(from); 
    to = Number(to);

    readFilteredData(search, from, to, "index", res);
}


module.exports = {getHomeView, postHomeView};