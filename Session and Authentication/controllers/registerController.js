const { hashPassword, attachToken } = require("../authUtils");
const User = require("../models/User");


function getRegisterView(req, res) {
    res.render("register");
}


function postRegisterView(req, res) {
    const {username, password, repeatPassword} = req.body;

    if (password !== repeatPassword) {
        return console.log("Password and repeat Password must match!");
    }

    User.find({username})
    .lean()
    .then(result => {
        if (result.length > 0) {
            return console.log("This username is already taken!");
        }
    })
    .catch(err => console.error(err));

    hashPassword(password)
    .then(hashedPass => User.create({username, password: hashedPass}))
    .then(user => {
        attachToken(user, res);

        console.log(`User: ${user.username} successfully registered!`);

        res.redirect("/");
    })
    .catch(err => console.error(err));
}


module.exports = {getRegisterView, postRegisterView};