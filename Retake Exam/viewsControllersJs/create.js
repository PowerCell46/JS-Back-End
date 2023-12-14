const Course = require("../schemas/course");
const displayError = require("../utils/displayError");


function getCreateView(req, res) {
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }

    res.render("create");
}


async function createHandler(req, res) {
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }

    const {title, type, certificate, imageUrl, description, price} = req.body;
    
    if (title.length < 5) {
        return displayError(res, "create", "Title must be at least 5 characters!");
    
    } else if (!imageUrl.toLowerCase().startsWith('http://') && !imageUrl.toLowerCase().startsWith("https://")) {
        return displayError(res, "create", "Image must start either with http:// or https:// !");
    
    } else if (description.length < 10) {
        return displayError(res, "create", "Description must be at least 10 characters!");
    
    } else if (certificate.length < 2) {
        return displayError(res, "create", "Certificate must be at least 2 characters!");
    
    } else if (price < 0) {
        return displayError(res, "create", "Price must be a positive number!");
    }

    try {
        const course = new Course({title, type, certificate, image: imageUrl, description, price, owner: req.user._id});
    
        course.save();

        console.log(`${req.user.username} successfuly created ${course.title}!`);

        res.redirect("/allCourses");

    } catch(err) {
        return displayError(res, "create", err.message);
    }
}


module.exports = {getCreateView, createHandler};