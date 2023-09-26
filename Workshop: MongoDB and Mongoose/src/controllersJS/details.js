const Cube = require('../configFiles/schemas/cubeSchema');
const Accessory   = require("../configFiles/schemas/accessorySchema");
const User = require("../configFiles/schemas/userSchema");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;

async function detailsHandler(req, res) {
    try {
    const token = req.cookies.authenticationCookieToken;
    const currentUserUsername = jwt.verify(token, secret).username;
    var currentUserId = await User.find({username: currentUserUsername});
    currentUserId = currentUserId[0]._id.toString();
    } catch(err) {
        updateNavigation(req, err.message);
        return res.render("404");
    }
    const cubeId = req.params.id;

    data = await Cube.find();
    const currentData = data.filter(x => x._id.toString() === cubeId)[0];
    if (currentData === undefined) {
        updateNavigation(req, "There is no cube with the given ID...");
        return res.render("404");
    }

    let currentCubeAccessories = await Accessory.find();
    currentCubeAccessories = currentCubeAccessories.filter(x => currentData.accesssories.includes(x.name));

    const newHtmlDetails = `
    <main>
        <h1>${currentData.name}</h1>
        <img class="cube" src="${currentData.imageUrl}">
        <div class="details">
            <p><span>Description:</span> ${currentData.description}</p>
            <p><span>Difficulty level:</span> ${currentData.difficultyLevel}</p>
            <a class="btn" href="/">Back</a>
            ${currentData.creatorId, currentUserId ? `
            <a class="btn" href="/attach/accessory/${currentData._id}">Add Accessory</a>
            <a class="btn" href="/edit/${currentData._id}">Edit</a>
            <a class="btn" href="/delete/${currentData._id}">Delete</a>`
            : ``
        }
        </div>
        <h2>Accessories</h2>
        <div class="accessories">
           ${currentCubeAccessories.length > 0 ?
            currentCubeAccessories.map(accessoryTemplate) : `<h3 class="italic">This cube has no accessories yet...</h3>`}
        </div>
    </main>`

    fs.writeFile("./views/details.hbs", newHtmlDetails, (writeErr) => {
        if (writeErr) {
        updateNavigation(req, `There was an error getting the details page...`);
        return res.render("404");
        }
    });
    res.render("details");
}


function accessoryTemplate(data) {
    return `
    <div class="accessory">
        <img src="${data.imageUrl}" alt="stickerName">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
    </div>
    `
}

module.exports = { detailsHandler };
