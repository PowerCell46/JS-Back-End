const displayError = require("../utils/displayError");
const Course = require("../schemas/course");


async function signUpHandler(req, res) {
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }
    
    const courseId = req.params.id;

    try {
        const course = await Course.findOne({_id: courseId});

        if (course.signUpList.filter(c => c.toString() === req.user._id.toString()).length !== 0) {
            return displayError(res, 'details', "You have already been Signed Up!");
        }

        course.signUpList.push(req.user._id);

        await course.save();

        res.redirect(`/course/${courseId}`);
        
    } catch(err) {
        return displayError(res, "details", err.message);
    }
}


module.exports = signUpHandler;