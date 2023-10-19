const Creature = require("../schemas/creatureSchema");


async function getDashboardView(req, res) {
    try {
        const creatures = await Creature.find().lean();
        res.render('all-posts', {creatures: creatures.length > 0 ? creatures : null});
    
    } catch(err) {
    
        res.render('404', {err: err.message});
    }
}


module.exports = getDashboardView;
