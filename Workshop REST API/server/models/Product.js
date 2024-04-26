const {model, Schema} = require("mongoose");
const { productDataReq } = require("../utils/constants");


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: productDataReq.nameMinLen,
        maxlength: productDataReq.nameMaxLen
    },
    factor: {
        type: Number,
        required: true,
        min: productDataReq.factorMinVal,
        max: productDataReq.factorMaxVal
    },
    price: {
        type: Number,
        required: true,
        min: productDataReq.priceMinVal,
        max: productDataReq.priceMaxVal
    },
    img: {
        type: String,
        required: true
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});


const Product = model("Product", productSchema);


module.exports = Product;