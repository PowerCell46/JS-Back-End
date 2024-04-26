const Product = require("../models/Product");
const User = require("../models/User");
const { decodeToken } = require("../utils/authUtils");
const { errorResponse } = require("../utils/errorUtils");


function postOrder(req, res) {
    const token = req.headers['x-authorization'];
    const decodedToken = decodeToken(token);

    if (decodedToken === null) {
        return errorResponse(res, 403, "Unauthorized!");
    }

    const {orderProductsIds} = req.body;

    User.findByIdAndUpdate(decodedToken.userId,
        { $push: { orders: { $each: orderProductsIds } } },
        { new: true }
      )
      .then(user => {
        console.log(`Updated User orders: ${user.orders}`);

        res.status(200).send("Successful order!");
      })
      .catch(error => {
        console.error(error);

        errorResponse(res, 500, "Internal Server Error!");
      });
}


function getOrders(req, res) {
    const token = req.headers['x-authorization'];
    const decodedToken = decodeToken(token);

    if (decodedToken === null) {
        return errorResponse(res, 403, "Unauthorized!");
    }

    User.findById(decodedToken.userId)
    .then(user => {
        let totalPrice = 0;
        let productNames = [];

        const productRequests = user.orders.map(productId => 
            Product.findById(productId.toString())
        );

        Promise.all(productRequests)
            .then(products => {
                products.forEach(product => {
                    totalPrice += product.price;
                    productNames.push(product.name);
                });

                res.json({ totalPrice, productNames: productNames.join(", ") });
            })
            .catch(error => {
                console.error(error);
                
                return errorResponse(res, 500, "Internal Server Error!");
            });
    })
    .catch(error => {
        console.error(error);

        errorResponse(res, 500, "Internal Server Error!");
    });
}

module.exports = {postOrder, getOrders};