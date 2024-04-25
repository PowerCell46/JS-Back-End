const Product = require("../models/Product");
const User = require("../models/User");
const { decodeToken } = require("../utils/authUtils");


function postOrder(req, res) {
    const token = req.headers['x-authorization'];
    const decodedToken = decodeToken(token);

    if (decodedToken === null) {
        return res.status(403).send("Unauthorized!");
    }

    const {orderProductsIds} = req.body;

    console.log(orderProductsIds);

    User.findByIdAndUpdate(decodedToken.userId,
        { $push: { orders: { $each: orderProductsIds } } },
        { new: true }
      )
      .then(user => {
        console.log(user);

        res.status(200).send("Successful order!");
      })
      .catch(error => {
        console.error(error);
        res.status(500).send("Internal Error!");
      });
}


function getOrders(req, res) {
    const token = req.headers['x-authorization'];
    const decodedToken = decodeToken(token);

    if (decodedToken === null) {
        return res.status(403).send("Unauthorized!");
    }

    User.findById(decodedToken.userId)
    .then(user => {
        let totalPrice = 0;
        let productNames = [];

        // Map each productId to a Promise that resolves to the corresponding product
        const productPromises = user.orders.map(productId => Product.findById(productId.toString()));

        // Wait for all the product retrieval promises to resolve
        Promise.all(productPromises)
            .then(products => {
                // Calculate total price and collect product names
                products.forEach(product => {
                    totalPrice += product.price;
                    productNames.push(product.name);
                });

                // Send data as JSON
                res.json({ totalPrice, productNames: productNames.join(", ") });
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Failed to retrieve products' });
            });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve user' });
    });
}

module.exports = {postOrder, getOrders};