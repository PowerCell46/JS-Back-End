const Course = require("../schemas/course");
const displayError = require("../utils/displayError");


async function deleteHandler(req, res) {
    if (!req.user) {
        return displayError(res, '404', "You are not logged in!");
    }

    const courseId = req.params.id;

    try {
        const course = await Course.findOne({_id: courseId}).lean();

        if (course.owner.toString() !== req.user._id.toString()) {
            return displayError(res, '404', "You are not the Owner of this Course!");
        }

        const deletedCourse = await Course.deleteOne({_id: courseId});

        console.log(`Course ${deletedCourse.title} successfully deleted!`);

        res.redirect("/allCourses");

    } catch(err) {
        return displayError(res, "404", err.message);
    }
}


module.exports = deleteHandler;