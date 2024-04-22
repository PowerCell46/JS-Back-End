function getRegisterView(req, res) {
    res.render("register");

}


function postRegisterView(req, res) {
    const {username, password, repeatPassword} = req.body;

    console.log(username, password, repeatPassword);

}


module.exports = {getRegisterView, postRegisterView};