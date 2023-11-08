const Electronics = require("../schemas/electronics");


async function getSearchView(req, res) {
    const electronics = await Electronics.find().lean();
    res.render("search", {electronics: electronics.length > 0 ? electronics : null});
}


async function searchHandler(req, res) {
    try {
        const {name, type} = req.body;
    
        const electronics = await Electronics.find(
            { name: { $regex: new RegExp(name.toLowerCase(), 'i')},
            type: { $regex: new RegExp(type.toLowerCase(), "i")} }).lean();
        
        res.render("search", {electronics: electronics.length > 0 ? electronics : null});
    
    } catch(err) {
        res.render("404", {err: err.message});
    }
}


module.exports = {getSearchView, searchHandler};
