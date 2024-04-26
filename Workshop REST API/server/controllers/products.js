const Product = require("../models/Product");
const { decodeToken } = require("../utils/authUtils");
const { errorResponse } = require("../utils/errorUtils");
const { validateProductData } = require("../utils/validators");


function getProducts(req, res) {
    Product.find()
    .then(products => {
        res.status(200).json(products);
    })
    .catch(err => {
        console.error(err);
        errorResponse(res, 500, "Internal Server Error!");
    });
}


function postProducts(req, res) {
    let {name, price, factor, img} = req.body;
    name = name.trim(); price = Number(price); factor = Number(factor); img = img.trim();

    const validProductData = validateProductData(name, price, factor, img);

    if (validProductData !== true) {
        return errorResponse(res, 400, validProductData);
    }

    const token = req.headers['x-authorization'];
    const decodedToken = decodeToken(token);

    if (decodedToken === null) {
        return errorResponse(res, 403, "Unauthorized!");
    }
    
    Product.create({name, price, factor, img, creatorId: decodedToken.userId})
    .then(product => {
        console.log(product);
        res.status(200).send("Successful creation");
    })
    .catch(err => {
        errorResponse(res, 500, "Internal Server Error!");
    });
}

module.exports = {getProducts, postProducts};