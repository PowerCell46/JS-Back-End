const Electronics = require("../schemas/electronics");


async function buyHandler(req, res) {
    if (req.user === undefined) {
        return res.render(`/details/${req.params.id}`, {err: "You are not Logged in so you cannot buy Products!"});
    }

    const electronic = await Electronics.findById(req.params.id);
    
    if (electronic.owner.toString() === req.user._id.toString()) {
        return res.render(`/details/${req.params.id}`, {err: "You are the owner of this Product so you cannot buy it!"});
    }

    if (electronic.buyingList.map(electr => electr.toString()).includes(req.user._id.toString())) {
        return res.render(`/details/${req.params.id}`, {err: "You've already bought this Product!"});
    }
    
    electronic.buyingList.push(req.user._id);

    await electronic.save();

    console.log(`Successfully bought!`);

    res.redirect(`/details/${req.params.id}`);
}


module.exports = buyHandler;