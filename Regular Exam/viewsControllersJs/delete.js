const Electronics = require("../schemas/electronics");


async function deleteHandler(req, res) {
    try {
        if (req.user._id === undefined) {
            return res.render("404", {err: "You are not Logged in and you cannot delete other people's products!"});
        }
    
        const electronic = await Electronics.findById(req.params.id);
    
        if (electronic.owner.toString() !== req.user._id.toString()) {
            return res.render("404", {err: "You are not the owner of this Product so you are not allowed to Delete it!"});
        }
    
        try {
            const deletedElectronic = await Electronics.findByIdAndDelete(req.params.id);
    
            console.log(`Deleted electronic: ${deletedElectronic.name}!`);
    
            res.redirect("/catalog");
        
        } catch(err) {
            
            return res.render(`/details/${req.params.id}`, {err: err.message});
        }
    
    } catch(err) {

        res.render("404", {err: err.message});
    }

}


module.exports = deleteHandler;