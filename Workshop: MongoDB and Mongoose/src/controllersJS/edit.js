const Cube = require("../configFiles/schemas/cubeSchema");
const User = require("../configFiles/schemas/userSchema");
const fs = require('fs');
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;

async function edit(req, res) {
    const token = req.cookies.authenticationCookieToken;
    const currentUserUsername = jwt.verify(token, secret).username;
    const currentUser = await User.find({username: currentUserUsername});

    const cubeId = req.params.id;
    const currentCube = await Cube.findById(cubeId);

    if (currentUser[0]._id.toString() !== currentCube.creatorId) {
        return console.log("You are not the owner of this Cube and you are not allowed to Edit it!");
        
    }

    const editHtml = `
    <main>
        <h1>Edit Cube</h1>
        <div class="form">
            <form action="#" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="${currentCube.name}">
                <label for="description">Description</label>
                <textarea id="description" name="description">${currentCube.description}</textarea>
                <label for="image">ImageUrl</label>
                <input type="text" id="image" name="imageUrl" value="${currentCube.imageUrl}">
                <label for="difficulty">Difficulty</label>
                <select id="difficulty" name="difficultyLevel">
                    <option value="1" ${currentCube.difficultyLevel === 1 ? 'selected' : ''}>1 - Very Easy</option>
                    <option value="2" ${currentCube.difficultyLevel === 2 ? 'selected' : ''}>2 - Easy</option>
                    <option value="3" ${currentCube.difficultyLevel === 3 ? 'selected' : ''}>3 - Medium (Standard 3x3)</option>
                    <option value="4" ${currentCube.difficultyLevel === 4 ? 'selected' : ''}>4 - Intermediate</option>
                    <option value="5" ${currentCube.difficultyLevel === 5 ? 'selected' : ''}>5 - Expert</option>
                    <option value="6" ${currentCube.difficultyLevel === 6 ? 'selected' : ''}>6 - Hardcore</option>
                </select>
                <input type="submit" value="Edit">
            </form>
        </div>
    </main>`;

    fs.writeFile("./views/edit.hbs", editHtml, (err) => {
        if (err) {
            return console.log("There was an error rendering the edit page!");
        }
    });

    res.render("edit");
}


async function editHandler(req, res) {

    const cubeId = req.params.id;

    try {
        const currentEditedCube = await Cube.findByIdAndUpdate(
            cubeId,
            {
                $set: {
                    name: req.body.name,
                    description: req.body.description,
                    imageUrl: req.body.imageUrl,
                    difficultyLevel: req.body.difficultyLevel
                }
            },
            { new: true }
        );

        console.log(`Cube updated successfully!`);
        res.redirect(`/details/${cubeId}`);

    } catch (err) {
        console.log(err);
    }
}

module.exports = { edit, editHandler }