const User = require("../schemas/UserSchema");
const Creature = require("../schemas/creatureSchema");


async function getDetailsView(req, res) {
    try {
        var currentCreatureData = await Creature.findById(req.params.id).lean();
       
        var isLoggedIn = req.user !== undefined;
       
        if (isLoggedIn) {

            var isOwner = currentCreatureData.owner.toString() === req.user._id;
          
            var hasNotVoted = currentCreatureData.votes.filter(x => x.toString() === req.user._id.toString()).length === 0 && !isOwner;
           
            var votedUsers = await Promise.all(currentCreatureData.votes.map(async (x) => { return await extractUserName(x.toString())}));
           
            var userEmails = votedUsers.map(user => user.email);    
        }
    
    } catch(err) {
        res.render("404", {err: err.message}); 
    }

    res.render('details', {creature: currentCreatureData, isLoggedIn, isOwner, hasNotVoted, userEmails, isNotOwner: !isOwner});
}


async function extractUserName(userId) {
    return await User.findById(userId);
}


module.exports = getDetailsView;