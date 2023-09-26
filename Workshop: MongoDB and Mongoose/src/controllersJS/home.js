const Cube = require('../configFiles/schemas/cubeSchema');
const fs = require("fs");

async function homeHandler(search, from, to) {
    data = await Cube.find();
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
    });
}

function cubeCard(data) {
    return `<div class="cube">
    <img class="cube" src="${data.imageUrl}">
    <p class="name">${data.name}</p>
    <p><span>Difficulty level:</span> ${data.difficultyLevel}</p>
    <a class="btn" href="/details/${data._id.toString()}">Details</a>
</div>`
}

module.exports = homeHandler;