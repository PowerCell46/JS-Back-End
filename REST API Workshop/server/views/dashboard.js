const Furniture = require("../schemas/furnitureSchema");

async function getFurniture(req, res) {
    let currentUserId = req.query.where;
    let furniture = null;

    if (currentUserId) {
        currentUserId = currentUserId.split(`"`)[1];
        furniture = await Furniture.find({_ownerId: currentUserId});
    } else {
        furniture = await Furniture.find();
    }

    res.json(furniture);
}


module.exports = getFurniture;