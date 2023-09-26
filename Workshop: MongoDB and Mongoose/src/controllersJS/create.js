const Cube = require('../configFiles/schemas/cubeSchema');
const User = require("../configFiles/schemas/userSchema");
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;

const getCreateCube = (req, res) => {
    res.render("create");
}

async function postCreateCube(req, res) {
    const token = req.cookies.authenticationCookieToken;
    const currentUserUsername = jwt.verify(token, secret).username;
    try {
        var userId = await User.find({username: currentUserUsername});
        userId = userId[0]._id.toString();
    } catch(err) {

    }

    if (userId === undefined) {
        updateNavigation(req, `You are not authorized to create a cube!`);
        return res.render("404")
    }

    let cube = new Cube({ name: req.body.name, description: req.body.description, imageUrl: req.body.imageUrl, difficultyLevel: req.body.difficultyLevel, creatorId: userId });

    await cube.save();
    res.redirect("/");
}

module.exports = { getCreateCube, postCreateCube }