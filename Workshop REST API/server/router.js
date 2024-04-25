const login = require("./controllers/login");
const logout = require("./controllers/logout");
const register = require("./controllers/register");

const router = require("express").Router();


router.route("/")
.get((req, res) => res.send("HOME"));


router.post("/register", register);


router.post("/login", login);


router.get("/logout", logout);


module.exports = router;