const { accessoryFieldRequirements } = require("../constants");
const Accessory = require("../models/Accessory");
const { validateImageUrl } = require("../validators");


function getCreateAccessoryView(req, res) {
    res.render("createAccessory");
}


function postCreateAccessoryView(req, res) {
    const {name, description, imageUrl} = req.body;

    if (validateImageUrl(imageUrl) && description.length < accessoryFieldRequirements.descMaxLen) {

        Accessory.create({name, description, imageUrl})
        .then(() => res.redirect(`/`))
        .catch(err => console.error(err));

    } else {
        console.log("Invalid data!");
    }
}


module.exports = {getCreateAccessoryView, postCreateAccessoryView};