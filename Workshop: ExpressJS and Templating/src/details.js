const fs = require("fs");
const he = require("he");

function detailsHandler(req, res) {
    const id = req.params.id;
    
    fs.readFile("./cubesData.json", "utf-8", (err, data) => {
        if (err) {
            console.log("There was an error readin the JSON file...");
            res.render("404");
            return
        }

        data = JSON.parse(data);
        const currentData = data["cubes"].filter(x => x.cubeId === id)[0];
        if (currentData === undefined) {
            res.render("404");
            return console.log("There is no cube with the given Id...");
        }
        const newHtmlDetails = `
        <main>
            <h1>${he.encode(currentData.name)}</h1>
            <img class="cube" src="${he.encode(currentData.imageUrl)}">
            <div class="details">
                <p><span>Description:</span> ${he.encode(currentData.description)}</p>
                <p><span>Difficulty level:</span> ${he.encode(currentData.difficultyLevel)}</p>
                <a class="btn" href="/">Back</a>
            </div>
        </main>`

        fs.writeFile("./views/details.hbs", newHtmlDetails, (writeErr) => {
            if (writeErr) {
                res.render("404");
                return console.log("There was an error detting the details page...");
            }
        })
        res.render("details");
    });
}
module.exports = {detailsHandler};