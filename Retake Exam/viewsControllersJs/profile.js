const Course = require("../schemas/course");
const displayError = require("../utils/displayError");


async function profileHandler(req, res) {

    try {
        const courses = await Course.find().lean();

        let createdCourses = [];
        let signedUpCourses = [];

        for (let course of courses) {
            if (course.owner.toString() === req.user._id.toString()) {
                createdCourses.push(course);
            } 

            if (course.signUpList.filter(c => c.toString() === req.user._id.toString()).length !== 0) {
                signedUpCourses.push(course);
            }
        }

        let numberOfCreatedCourses = createdCourses.length;
        let numberOfSignedUpCourses = signedUpCourses.length; 
        
        res.render("profile", {user: req.user, numberOfCreatedCourses, numberOfSignedUpCourses, hasCreatedCourses: numberOfCreatedCourses > 0, createdCourses, hasSignedUpForCourses: numberOfSignedUpCourses > 0, signedUpCourses});
    } catch(err) {
        return displayError(res, "login", err.message);
    }

}


module.exports = profileHandler;