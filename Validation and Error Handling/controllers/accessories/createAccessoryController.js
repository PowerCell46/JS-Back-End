const Accessory = require("../../models/Accessory");
const { errorMessageHandler } = require("../../utils");
const { validateCubeOrAccessoryData } = require("../../validators");


function getCreateAccessoryView(req, res) {
    res.render("createAccessory");
}


function postCreateAccessoryView(req, res) {
    const {name, description, imageUrl} = req.body;

    const validateData = validateCubeOrAccessoryData("Accessory", name, description, imageUrl, null);

    if (validateData === true) {

        Accessory.create({name, description, imageUrl})
        .then(() => res.redirect(`/`))
        .catch(err => console.error(err)); // notify the user ???

    } else {
        return errorMessageHandler(res, "createAccessory", validateData);
    }
}


module.exports = {getCreateAccessoryView, postCreateAccessoryView};