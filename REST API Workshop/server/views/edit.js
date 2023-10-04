const Furniture = require("../schemas/furnitureSchema");

async function editHandler(req, res) {
    const {make, model, year, description, price, img, material} = req.body;

    const updatedFurniture = await Furniture.findByIdAndUpdate(req.params.id, 
        {
            $set: {make, model, year, description, price, img, material}
        },
        { new: true }
    );
    
    res.json({ok: true});
    console.log("EDITED!");
}


module.exports = editHandler;