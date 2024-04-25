const {model, Schema} = require("mongoose");


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    factor: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    creatorId: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


const Product = model("Product", productSchema);


module.exports = Product;