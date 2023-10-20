const Creature = require("../schemas/creatureSchema");


async function getProfileView(req, res) {
    if (req.user === undefined) {
        res.render("404", {err: "You are not logged in so you cannot access the Profile Page!"});
    }

   try {
        let creatures = await Creature.find().lean();

        creatures = creatures.filter(x => x.owner.toString() === req.user._id.toString()); 
        
        res.render("profile", {creatures: creatures.length > 0 ? creatures : null, author: req.user.email});
   
    } catch(err) {
        res.render("404", {err: err.message});
   }
}


module.exports = getProfileView;