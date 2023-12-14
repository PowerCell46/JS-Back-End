const Course = require("../schemas/course");
const displayError  = require("../utils/displayError");


async function getCatalogView(req, res) {
    try {
        var courses = await Course.find().sort({ createdAt: -1 }).lean();

        res.render("catalog", {hasCourses: courses.length > 0, courses});

    } catch {
        return displayError(res, "404", err.message);
    }
}


module.exports = getCatalogView;