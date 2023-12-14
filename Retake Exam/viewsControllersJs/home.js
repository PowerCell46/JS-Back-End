const Course = require("../schemas/course");
const displayError = require("../utils/displayError");


async function getHomeView(req, res) {
    try {
        const lastThreeCourses = await Course.find().sort({ createdAt: -1 }).limit(3).lean();

        res.render("home", {hasCourses: lastThreeCourses.length > 0, courses: lastThreeCourses});   
    
    } catch(err) {
        return displayError(res, "404", err.message);
    }
}


module.exports = getHomeView;