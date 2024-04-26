const login = require("./controllers/login");
const { postOrder, getOrders } = require("./controllers/orders");
const { getProducts, postProducts } = require("./controllers/products");
const register = require("./controllers/register");

const router = require("express").Router();


router.post("/register", register);


router.post("/login", login);


router.route("/products")
.get(getProducts)
.post(postProducts);


router.route("/orders")
.get(getOrders)
.post(postOrder)


module.exports = router;