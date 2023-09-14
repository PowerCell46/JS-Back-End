const fs = require('fs');
const he = require("he");

function homeHandler(search, from, to) {
    fs.readFile("./cubesData.json", "utf-8", (err, data) => {
        if (err) {
            return console.log("There was an error reading the JSON file.");
        }

        data = JSON.parse(data)["cubes"];
        if (search) {
            data = data.filter(x => x["name"].toLowerCase().includes(search.toLowerCase()));
        }
        if (from && to) {
            data = data.filter(x => from <= Number(x["difficultyLevel"]) && Number(x["difficultyLevel"]) <= to);
        }
        const cubeElements = data.map(cubeCard).join("\n");
        const finalHomeLayout = `
        <main>
            <h1>Browser</h1>
            <form action="/" method="get">
                <input type="text" class="search" name="search" placeholder="Search...">
                <input type="number" name="from" class="difficulty" placeholder="Difficulty from...">
                <span>-</span>
                <input type="number" name="to" class="difficulty" placeholder="Difficulty to...">
                <input type="submit" id="reloadButton" value="search">
            </form>
      ${cubeElements}

      </main>`;

      fs.writeFile("./views/index.hbs", finalHomeLayout, (writeErr) => {
        if (writeErr) {
            return console.log("An error occurred while writing the file.");
        }
      })
    })
}

function cubeCard(data) {
    return `<div class="cube">
    <img class="cube" src="${he.encode(data.imageUrl)}">
    <p class="name">${he.encode(data.name)}</p>
    <p><span>Difficulty level:</span> ${he.encode(data.difficultyLevel)}</p>
    <a class="btn" href="/details/${data.cubeId}">Details</a>
</div>`} 

module.exports = {homeHandler};