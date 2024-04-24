const { hashPassword, attachToken } = require("../../utils/authUtils");
const User = require("../../models/User");
const { errorMessageHandler } = require("../../utils/utils");
const { validateUserData } = require("../../utils/validators");


function getRegisterView(req, res) {
    res.render("register");
}


function postRegisterView(req, res) {
    const {username, password, repeatPassword} = req.body;

    if (password !== repeatPassword) {
        return errorMessageHandler(res, "register", "Password and repeat Password must match!");
    }

    const validateData = validateUserData(username, password);
    if (validateData !== true) {
        return errorMessageHandler(res, "register", validateData);
    }

    User.find({username})
    .lean()
    .then(result => {
        if (result.length > 0) {
            return errorMessageHandler(res, "register", "This username is already taken!");
        }
    })
    .catch(err => console.error(err)); // notify the user ???

    hashPassword(password)
    .then(hashedPass => User.create({username: username.trim(), password: hashedPass}))
    .then(user => {
        attachToken(user, res);

        console.log(`User: ${user.username} successfully registered!`);

        res.redirect("/");
    })
    .catch(err => console.error(err)); // notify the user ???
}


module.exports = {getRegisterView, postRegisterView};