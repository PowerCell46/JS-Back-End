const { validatePassword, attachToken } = require("../authUtils");
const User = require("../models/User");


function getLoginView(req, res) {
    res.render("login");
}


function postLoginView(req, res) {
    const {username, password} = req.body;

    User.findOne({username})
    .then(user => {
        if (user) {
            validatePassword(password, user.password)
            .then(validPass => {
                if (validPass) {
                    attachToken(user, res);

                    console.log(`User: ${user.username} successfully logged in!`);

                    res.redirect("/");

                } else {
                    console.log("Invalid Password!");
                }
            })
            .catch(err => console.error(err));
        }
    })
    .catch(err => console.error(err));
}


module.exports = {getLoginView, postLoginView};