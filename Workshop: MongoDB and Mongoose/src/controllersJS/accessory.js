const Cube = require("../configFiles/schemas/cubeSchema");
const Accessory = require("../configFiles/schemas/accessorySchema");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;
const updateNavigation = require("./navigation");

async function getAttachAccessory(req, res) {
    const id = req.params.id;

    let allCubesData = await Cube.find();
    try {
    var currentCubeData = allCubesData.filter(x => x._id.toString() === id)[0];

    if (currentCubeData === undefined) {
        updateNavigation(req, "There is no Cube with the given Id...")
        res.render("404");
    }

    } catch(err) {
        updateNavigation(req, "There is no Cube with the given Id...")
        res.render("404");
    }

    let accessories = await Accessory.find();
    accessories = accessories.filter(x => !currentCubeData.accesssories.includes(x.name));

    const newHtmlAttachAccessory = `
    <main>
        <h1>Attach a new accessory</h1>
        <div class="form">
            <h2>${currentCubeData.name}</h2>
            <img class="cube" src="${currentCubeData.imageUrl}">
            ${accessories.length > 0 ?
            `<form action='/attach/accessory/${currentCubeData._id}' method="POST">
                <label for="accessory">Accessories</label> 
                    <select id="accessory" name="accessory"/>
                    ${accessories.map(x => `<option value="${x.name}">${x.name}</option>`)}
                    </select>
                <input type="submit" value="Attach">
            </form>`
            : ` <h3 class="italic">This cube has all available accessories so far or there is no available at all...</h3>`
        }
            <a class="btn" href="/details/${currentCubeData._id}">Back</a>
        </div>
    </main>`;

    fs.writeFile('./views/attachAccessory.hbs', newHtmlAttachAccessory, (writeErr) => {
        if (writeErr) {
            updateNavigation(req, "There was an error getting the attach accessory page...")
            return res.render('404');
        }
    });
    res.render("attachAccessory");
}


async function postAttachAccessory(req, res) {
    const userId = req.cookies.authenticationCookieToken;
    if (userId === undefined) {
        updateNavigation(req, "You are not authorized to attach accessory to this cube!");
    }

    try {
        const updatedCube = await Cube.findById(req.params.id);
        updatedCube.accesssories.push(req.body.accessory);

        if (!updatedCube) {
            updateNavigation(req, "Cube not found!");
            return res.render("404");
        } else {
            await updatedCube.save();
            console.log('The Cube was updated successfully!');
        }

        } catch (error) {
            console.error('Error updating Cube document:', error);
            updateNavigation(req,`Error updating Cube document: ${error.message}`);
            return res.render("404");
        }
        res.redirect(`/details/${req.params.id}`);
}


const getCreateAccessory = (req, res) => {
    res.render("createAccessory");
}

async function postCreateAccessory(req, res) {
    let accessory = new Accessory({ name: req.body.name, description: req.body.description, imageUrl: req.body.imageUrl });

    await accessory.save();
    res.redirect("/");
}

module.exports = { getAttachAccessory, postAttachAccessory, getCreateAccessory, postCreateAccessory };
