const Creature = require("../schemas/creatureSchema");


async function deleteHandler(req, res) {
    
    try {
        const creature = await Creature.findById(req.params.id);
      
        if (creature.owner.toString() !== req.user._id) {
            res.render("details", {err: err.message});
        }
      
        const deletedCreature = await Creature.findByIdAndDelete(req.params.id);
      
        console.log(`Successfully deleted ${deletedCreature.name}!`);
     
        res.redirect("/dashboard");
    
    } catch(err) {

        res.render("404", {err: err.message});
    }
}


module.exports = deleteHandler;
