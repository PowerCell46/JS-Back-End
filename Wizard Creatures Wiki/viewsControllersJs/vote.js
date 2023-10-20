const Creature = require("../schemas/creatureSchema");


async function voteHandler(req, res) {
    if (req.user === undefined) { // Checking if the user is not logged in
        return res.render("details", {err: "You are not logged in and you cannot vote for a Creature!"});
    }

    const creature = await Creature.findById(req.params.id);

    if (creature.owner.toString() === req.user._id) { // Checking if the user is not the Owner
        return res.render("details", {err: "You are the owner of this Creature so you cannot vote for it!"});
    }

    if (creature.votes.map((x) => x.toString()).includes(req.user._id) || creature.owner.toString() === req.user._id) { // Checking if the user hasn't already voted
        return res.render("details", {err: "You have already voted for this Creature!"});
    }

    creature.votes.push(req.user._id.toString());

    await creature.save();

    console.log(`Successfully voted!`);

    res.redirect(`/details/${req.params.id}`);
}


module.exports = voteHandler;