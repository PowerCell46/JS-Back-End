const Electronics = require("../schemas/electronics");


async function getCatalogView(req, res) {
    const electronics = await Electronics.find().lean();
    
    res.render("catalog", {electronics: electronics.length > 0 ? electronics: null});
}


module.exports = getCatalogView;