const {model, Schema} = require("mongoose");
const { cubeFieldRequirements } = require("../constants");


const cubeSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
        maxLength: cubeFieldRequirements.descMaxLen
    },
    imageUrl: {
        required: true,
        type: String
    },
    difficultyLevel: {
        required: true,
        type: Number,
        minValue: cubeFieldRequirements.diffMinVal,
        maxValue: cubeFieldRequirements.diffMaxVal
    },
    accessories: [{
        type: Schema.Types.ObjectId,
        ref: "Accessory"
    }],
    creatorId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});



const Cube = model("Cube", cubeSchema);


module.exports = Cube;