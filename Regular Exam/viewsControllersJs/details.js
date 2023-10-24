const Electronics = require("../schemas/electronics");


async function getDetailsView(req, res) {
    try {
        const electronic = await Electronics.findById(req.params.id).lean();
    
        const isLoggedIn = req.user;

        if (isLoggedIn) {

            var isOwner = electronic.owner.toString() === req.user._id.toString();
            
            var hasBought = electronic.buyingList.map(electr => electr.toString()).includes(req.user._id.toString()) && !isOwner;

            var hasNotBought = !electronic.buyingList.map(electr => electr.toString()).includes(req.user._id.toString()) && !isOwner;

        }

        res.render("details", {electronic, isLoggedIn, isOwner, hasNotBought, hasBought});
    
    } catch(err) {
        
        res.render("404", {err: err.message});
    }
}


module.exports = getDetailsView;