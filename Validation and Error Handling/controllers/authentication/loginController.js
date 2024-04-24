const { validatePassword, attachToken } = require("../../authUtils");
const User = require("../../models/User");
const { errorMessageHandler } = require("../../utils");


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
                    return errorMessageHandler(res, "login", "Invalid Username or Password!");
                }
            })
            .catch(err => console.error(err)); // notify the user ???

        } else {
            return errorMessageHandler(res, "login", "Invalid Username or Password!");
        }
    })
    .catch(err => console.error(err)); // notify the user ???
}


module.exports = {getLoginView, postLoginView};