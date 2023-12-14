const Course = require("../schemas/course");
const displayError = require("../utils/displayError");


async function getDetailsView(req, res) {
    const courseId = req.params.id;

    try {
        const course = await Course.findOne({_id: courseId}).lean();

        let isOwner = false;
        let hasNotSignedUp = false;
        let hasSignedUp = false;

        if (req.user) {
            isOwner = course.owner.toString() === req.user._id.toString();
            hasNotSignedUp = course.signUpList.filter(c => c.toString() === req.user._id.toString()).length === 0 && !isOwner;
            hasSignedUp = course.signUpList.filter(c => c.toString() === req.user._id.toString()).length !== 0 && !isOwner;
        } 

        res.render("details", {course, isOwner, hasNotSignedUp, hasSignedUp});
        
    } catch(err) {
        return displayError(res, "404", err.message);
    }
}


module.exports = {getDetailsView};