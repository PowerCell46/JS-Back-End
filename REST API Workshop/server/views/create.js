const Furniture = require("../schemas/furnitureSchema");


async function createFurtnitureHandler(req, res) {
    try {
    const {make, model, year, description, price, img, material, _ownerId} = req.body;
    const furniture =  new Furniture({make, model, year, description, price, img, material, _ownerId});
    await furniture.save();
        
    res.json({_id: furniture._id}); 
    
    } catch(err) {
        console.log(err.message);
    } 
}


module.exports = createFurtnitureHandler;
