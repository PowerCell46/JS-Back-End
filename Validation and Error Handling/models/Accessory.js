const {model, Schema} = require("mongoose");
const { accessoryFieldRequirements } = require("../constants");


const accessorySchema = new Schema({
    name: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
        maxLength: accessoryFieldRequirements.descMaxLen
    }
});


const Accessory = model("Accessory", accessorySchema);


module.exports = Accessory;