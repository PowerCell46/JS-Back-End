const Electronics = require("../schemas/electronics");


function getCreateView(req, res) {
    if (req.user === undefined) {
        return res.render("404", {err: "You are not Logged in so you cannot create Electronics!"});
    }

    res.render("create");
}


async function createHandler(req, res) {
    if (req.user === undefined) {
        return res.render("404", {err: "You are not Logged in so you cannot create Electronics!"});
    }

    try {
        const {name, type, year, exploitation, damages, imageUrl, price, description} = req.body;
    
        if (name.length < 10) {
            return res.render("create", {err: "Name should be at least 10 characters long!"});
        
        } else if (type.length < 2) {
            return res.render("create", {err: "Type should be at least 2 characters long!"});
        
        } else if (damages.length < 10) {
            return res.render("create", {err: "Damages should be at least 10 characters long!"});
        
        } else if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
            return res.render("create", {err: "Image URL should start either with http:// or https:// !"});

        } else if (description.length < 10 || description.length > 200) {
            return res.render("create", {err: "Description should be between 10 and 200 characters!"});
        
        } else if (Number(year) < 1900 || Number(year) > 2023) {
            return res.render("create", {err: "Production year should be between 1900 and 2023!"});
        
        } else if (Number(exploitation) < 0) {
            return res.render("create", {err: "Exploitation should be a positive number!"});
       
        } else if (Number(price) < 0) {
            return res.render("create", {err: "Price should be a positive number!"});
        } 

        const electronic = new Electronics(
        { name, type, damages, imageUrl, description, production: Number(year),
        exploitation: Number(exploitation), price: Number(price), owner: req.user._id });
        
        electronic.save();

        console.log(`Successfully created: ${electronic.name}!`);

        res.redirect("/catalog");
    
    } catch(err) {
    
        return res.render("create", {err: err.message});
    }
}


module.exports = {getCreateView, createHandler};