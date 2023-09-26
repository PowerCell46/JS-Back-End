const Cube = require("../configFiles/schemas/cubeSchema");
const User = require("../configFiles/schemas/userSchema");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;

async function del(req, res) {
    const token = req.cookies.authenticationCookieToken;
    const currentUserUsername = jwt.verify(token, secret).username;
    const currentUser = await User.find({username: currentUserUsername});

    const cubeId = req.params.id;
    const currentCube = await Cube.findById(cubeId);

    if (currentUser[0]._id.toString() !== currentCube.creatorId) {
        updateNavigation(req, `You are not the owner of this Cube and you are not allowed to Edit it!`);
        return res.render("404");
    }

    const deleteHtml = `
    <main>
    <h1>Delete Cube</h1>
        <div class="form">
            <form action="#" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="${currentCube.name}" disabled="true" />
                <label for="description">Description</label>
                <textarea id="description" name="description" disabled="true" />${currentCube.description}</textarea>
                <label for="image">ImageUrl</label>
                <input type="text" id="image" name="imageUrl" value="${currentCube.imageUrl}" disabled="true" />
                <label for="difficulty">Difficulty</label>
                <select id="difficulty" name="difficultyLevel" disabled="true">
                        <option value="1" ${currentCube.difficultyLevel === 1 ? 'selected' : ''}>1 - Very Easy</option>
                        <option value="2" ${currentCube.difficultyLevel === 2 ? 'selected' : ''}>2 - Easy</option>
                        <option value="3" ${currentCube.difficultyLevel === 3 ? 'selected' : ''}>3 - Medium (Standard 3x3)</option>
                        <option value="4" ${currentCube.difficultyLevel === 4 ? 'selected' : ''}>4 - Intermediate</option>
                        <option value="5" ${currentCube.difficultyLevel === 5 ? 'selected' : ''}>5 - Expert</option>
                        <option value="6" ${currentCube.difficultyLevel === 6 ? 'selected' : ''}>6 - Hardcore</option>
                    </select>
                <input type="submit" value="Delete">
            </form>
        </div>
    </main>`

    fs.writeFile("./views/delete.hbs", deleteHtml, (err) => {
        if (err) {
            updateNavigation(req, err.message);
            return res.render("404");
        }
    });

    res.render("delete");
}

async function deleteHandler(req, res) {
    const cubeId = req.params.id;
    const deletedCube = await Cube.findByIdAndDelete(cubeId);

    console.log(`Cube ${deletedCube.name} was  successfully deleted!`);

    res.redirect("/");
}

module.exports = { del, deleteHandler }