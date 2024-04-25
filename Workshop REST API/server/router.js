const login = require("./controllers/login");
const logout = require("./controllers/logout");
const { postOrder, getOrders } = require("./controllers/orders");
const { getProducts, postProducts } = require("./controllers/products");
const register = require("./controllers/register");

const router = require("express").Router();


router.route("/")
.get((req, res) => res.send("HOME"));


router.post("/register", register);


router.post("/login", login);


router.get("/logout", logout);


router.route("/products")
.get(getProducts)
.post(postProducts);


router.route("/orders")
.get(getOrders)
.post(postOrder)


module.exports = router;