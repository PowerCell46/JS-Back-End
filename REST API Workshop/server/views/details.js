const Furniture = require("../schemas/furnitureSchema");

async function getDetails(req, res) {
    const furniture = await Furniture.findById(req.params.id);
    res.json(furniture);
}

module.exports = getDetails;