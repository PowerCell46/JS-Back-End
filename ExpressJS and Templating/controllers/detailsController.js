const { readSpecificData } = require("../handleData");


function getDetailsView(req, res) {
    readSpecificData(req.params.id, "details", res);
}


module.exports = {getDetailsView};