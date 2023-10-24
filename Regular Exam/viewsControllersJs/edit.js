const Electronics = require("../schemas/electronics");


async function getEditView(req, res) {
    if (req.user === undefined) {
        return res.render("404", "You are not authorized to access this Edit page because you are not Logged in!");
    }

    const electronic = await Electronics.findById(req.params.id).lean();

    if (electronic.owner.toString() !== req.user._id.toString()) {
        return res.render("404", {err: "You are not authorized to alter this Product because you are not the owner of it!"});
    }

    res.render("edit", {electronic});
}


async function editHandler(req, res) {
    try {
        if (req.user === undefined) {
            return res.render("404", "You are not authorized to access this Edit page because you are not Logged in!");
        }
    
        const electronic = await Electronics.findById(req.params.id).lean();
    
        if (electronic.owner.toString() !== req.user._id.toString()) {
            return res.render("404", {err: "You are not authorized to alter this Product because you are not the owner of it!"});
        }
    
        try {
            const {name, type, year, exploitation, damages, imageUrl, price, description} = req.body;
    
            const updatedElectronic = await Electronics.findByIdAndUpdate(req.params.id, {name, type, damages, imageUrl, description, production: Number(year), exploitation: Number(exploitation), price: Number(price), owner: req.user._id}, {new: true, runValidators: true});
    
            console.log(`Updated electronic: ${updatedElectronic.name}!`);
    
            res.redirect(`/details/${req.params.id}`);
        
        } catch (err) {
    
            return res.render(`/edit/${req.params.id}`, {err: err.message});
        }
    
    } catch(err) {

        res.render("404", {err: err.message});
    }
}


module.exports = {getEditView, editHandler};