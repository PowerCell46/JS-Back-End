const Furniture = require("../schemas/furnitureSchema");

async function deleteHandler(req, res) {
    const furniture = await Furniture.findByIdAndDelete(req.params.id);
    res.json({ok: true});
    console.log("DELETED!");
}


module.exports = deleteHandler;