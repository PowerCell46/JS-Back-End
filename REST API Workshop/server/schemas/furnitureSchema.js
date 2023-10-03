const {Schema, model} = require("mongoose");


const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
        minLength: 4
    },
    model: {
        type: String,
        required: true,
        minLength: 4
    },
    year: {
        type: Number,
        required: true,
        min: 1950,
        max: 2050
    },
    description: {
        type: String,
        required: true,
        minLength: 11
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: false
    },
    _ownerId: {
        type: String,
        required: true
    }
});


const Furniture = model("Furniture", furnitureSchema);


module.exports = Furniture;
