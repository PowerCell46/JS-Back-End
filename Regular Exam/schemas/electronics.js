const {model, Schema} = require("mongoose");


const electronicsSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 10
    },
    type: {
        type: String,
        required: true,
        minLength: 2
    },
    damages: {
        type: String,
        required: true,
        minLength: 10
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    production: {
        type: Number,
        required: true,
    },
    exploitation: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    buyingList: {
        type: [Schema.Types.ObjectId],
        ref: "User"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


const Electronics = model("Electronics", electronicsSchema);


module.exports = Electronics;