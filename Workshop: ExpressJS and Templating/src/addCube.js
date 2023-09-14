const fs = require("fs");
const he = require("he");

const filePath = "./views/index.hbs";

function createCube(data) {
    fs.readFile("./cubesData.json", "utf-8", (err, fileData) => {
    if (err) {
        return console.log("An error occured while reading the JSON file.");
    }

    let content = JSON.parse(fileData);
    content.cubes.push({name: data.name, description: data.description, imageUrl: data.imageUrl, difficultyLevel: data.difficultyLevel, cubeId: "" + Math.floor(Math.random() * 1000000000)});
    content = JSON.stringify(content);
    
    fs.writeFile("./cubesData.json", content, (err) => {
        if (err) {
            return console.log("An error occured while writing the JSON file.");
        }
    })
    });
}

module.exports = { createCube };

