function register(req, res) {

    const {email, password} = req.body;

    console.log(email, password);

    console.log(req.body);

    res.send("OK BRO!");
}


module.exports = register;