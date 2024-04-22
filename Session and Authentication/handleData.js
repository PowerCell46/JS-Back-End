const fs = require("fs/promises");
const {DB_LOCATION} = require("./constants");


function writeData(newEntry, res) {
    fs.readFile(DB_LOCATION, {encoding: "utf8"})
    .then(data => JSON.parse(data))
    .then(data => {
        data.push(newEntry);

        const newData = JSON.stringify(data, null, 4);

        fs.writeFile(DB_LOCATION, newData, "utf8")
        .then(() => res.redirect("/"))
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}


function readAllData(view, res) {
    fs.readFile(DB_LOCATION, {encoding: "utf8"})
    .then(data => JSON.parse(data))
    .then(data => {
        res.render(view, {cubes: data});
    })
    .catch(err => console.error(err));
}


function readSpecificData(id, view, res) {
    fs.readFile(DB_LOCATION, {encoding: "utf8"})
    .then(data => JSON.parse(data))
    .then(data => {
        const specificData = data.find(d => d.id === id);
        res.render(view, {cube: specificData});
    })
    .catch(err => console.error(err));
}


function readFilteredData(search, from, to, view, res) {
    fs.readFile(DB_LOCATION, {encoding: "utf8"})
    .then(data => JSON.parse(data))
    .then(data => {
        if (search) {
            data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (from && to) {
            data = data.filter(d => d.difficultyLevel >= from && d.difficultyLevel <= to);
        }
        res.render(view, {cubes: data});
    })
}


module.exports = {writeData, readAllData, readSpecificData, readFilteredData};