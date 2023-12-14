const displayError = require("../utils/displayError");
const Course = require("../schemas/course");


async function getEditView(req, res) {
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }

    const courseId = req.params.id;

    try {
        const course = await Course.findOne({_id: courseId}).lean();

        if (course.owner.toString() !== req.user._id.toString()) {
            return displayError(res, '404', "You are not the Owner of this Course!");
        }

        res.render("edit", {course});

    } catch(err) {
        return displayError(res, "404", err.message);
    }
}


async function editHandler(req, res) {
    const courseId = req.params.id;
    
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }

    try {
        const course = await Course.findOne({_id: courseId}).lean();

        if (course.owner.toString() !== req.user._id.toString()) {
            return displayError(res, '404', "You are not the Owner of this Course!");
        }

        const {title, type, certificate, imageUrl, description, price} = req.body;

        if (title.length < 5) {
            displayError(res, "create", "Title must be at least 5 characters!");
            return res.redirect(`/course/edit/${courseId}`);
            
        } else if (!imageUrl.toLowerCase().startsWith('http://') && !imageUrl.toLowerCase().startsWith("https://")) {
            displayError(res, "edit", "Image must start either with http:// or https://!");
            return res.redirect(`/course/edit/${courseId}`);

        } else if (description.length < 10) {
            displayError(res, "edit", "Description must be at least 10 characters!");
            return res.redirect(`/course/edit/${courseId}`);

        } else if (certificate.length < 2) {
            displayError(res, "edit", "Certificate must be at least 2 characters!");
            return res.redirect(`/course/edit/${courseId}`);

        } else if (price < 0) {
            displayError(res, "edit", "Price must be a positive number!");
            return res.redirect(`/course/edit/${courseId}`);
        }

        const updatedCourse = await Course.findByIdAndUpdate(courseId, {title, type, certificate, image: imageUrl, description, price});

        console.log(`Successfully Updated ${updatedCourse.title}!`);

        res.redirect(`/course/${courseId}`);

    } catch(err) {
        return displayError(res, "edit", err.message);
    }

}


module.exports = {getEditView, editHandler};