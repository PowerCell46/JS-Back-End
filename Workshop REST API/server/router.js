const register = require("./controllers/register");

const router = require("express").Router();


router.route("/")
.get((req, res) => res.send("HOME"));


router.post("/register", register);


module.exports = router;