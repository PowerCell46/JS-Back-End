const Creature = require("../schemas/creatureSchema");


async function getEditView(req, res) {
   
    if (req.user === undefined) { // Checking if the user is not logged in
        return res.render("details", {err: "You are not logged in and you are not allowed to access this Page!"});
    }

    const creature = await Creature.findById(req.params.id).lean();
    if (creature.owner.toString() !== req.user._id) { // Checking if the user is not the owner of the Creature
        return res.render("details", {err: "You are not the owner of this Creature and you are not allowed to Edit it!"});
    }

    res.render("edit", {creature});
} 


async function editHandler(req, res) { 
    
    if (req.user === undefined) { // Checking if the user is not logged in
        return res.render("details", {err: "You are not logged in and you are not allowed to access this Page!"});
    }

    const creature = await Creature.findById(req.params.id);
    if (creature.owner.toString() !== req.user._id) { // Checking if the user is not the owner of the Creature
        return res.render("details", {err: "You are not the owner of this Creature and you are not allowed to Edit it!"});
    }

    const {name, species, skinColor, eyeColor, imageUrl, description} = req.body;
    
    const updatedCreature = await Creature.findByIdAndUpdate(req.params.id, {name, species, skinColor, eyeColor, imageUrl, description}, {new: true, runValidators: true});

    console.log(`Updated Creature: ${updatedCreature}`);

    res.redirect(`/details/${req.params.id}`);
}


module.exports = {getEditView, editHandler};