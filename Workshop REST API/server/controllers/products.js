const Product = require("../models/Product");
const { decodeToken } = require("../utils/authUtils");


function getProducts(req, res) {
    Product.find()
    .then(products => {
        res.status(200).json(products);
    })
    .catch(err => console.error(err));
}


function postProducts(req, res) {
    let {name, price, factor, img} = req.body;
    name = name.trim(); price = Number(price); factor = Number(factor); img = img.trim();
    const token = req.headers['x-authorization'];
    const decodedToken = decodeToken(token);

    if (decodedToken === null) {
        return res.status(403).send("Unauthorized!");
    }
    
    // validation

    Product.create({name, price, factor, img, creatorId: decodedToken.userId})
    .then(product => {
        console.log(product);
        res.status(200).send("Successful creation");
    })
    .catch(err => {
        res.status(500).send("Internal server error");
    });
}

module.exports = {getProducts, postProducts};