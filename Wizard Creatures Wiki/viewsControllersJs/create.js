const Creature = require("../schemas/creatureSchema");


function getCreateView(req, res) {
    if (!req.user) {
        res.render('404', {err: "You are not logged in so you cannot create Creatures!"});
    }

    res.render('create');
}


async function createHandler(req, res) {
    if (!req.user) {
        res.render('404', {err: "You are not logged in so you cannot create Creatures!"});
    }

    try {
        const {name, species, skinColor, eyeColor, imageUrl, description} = req.body;
        const creature = new Creature({name, species, skinColor, eyeColor, imageUrl, description, owner: req.user._id});
        await creature.save();
        console.log(`Successfully created ${creature.name}!`);
        res.redirect("/dashboard");
    
    } catch(err) {
        res.render("create", {err: err.messsage});
    }
}


module.exports = {getCreateView, createHandler};
