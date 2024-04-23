const {model, Schema} = require("mongoose");
const { accessoryFieldRequirements } = require("../constants");
const { validateImageUrl } = require("../validators");


const accessorySchema = new Schema({
    name: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String,
        validate: {
            validator: validateImageUrl,
            message: "The image URL must start with 'http' or 'https'!"
        }
    },
    description: {
        required: true,
        type: String,
        maxLength: accessoryFieldRequirements.descMaxLen
    }
});


const Accessory = model("Accessory", accessorySchema);


module.exports = Accessory;