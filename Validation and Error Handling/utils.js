const Cube = require("./models/Cube");

function generateId(length = 24) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters[randomIndex];
    }

    return id;
}


function filterHomeViewCubes(search, from, to, res) {
    const query = {};

    if (search) {
        query.name = { $regex: new RegExp(search, "i") };
    }
    if (from && to) {
        query.difficultyLevel = { $gte: from, $lte: to };
    }

    Cube.find(query)
    .lean()
    .then(data => {
        if (data.length > 0) {
            data = data.map(cube => ({ ...cube, _id: cube._id.toString() }));
            res.render("index", { cubes: data });

        } else {
            Cube.find().lean()
            .then(data => {
                data = data.map(cube => ({ ...cube, _id: cube._id.toString() }));
                res.render("index", { cubes: data });
            })
            .catch(err => console.error(err));
        }
    })
    .catch(err => console.error(err));        
}


function calculateSelectedOption(data) {
    return {
        first: data.difficultyLevel === 1,
        second: data.difficultyLevel === 2,
        third: data.difficultyLevel === 3,
        fourth: data.difficultyLevel === 4,
        fifth: data.difficultyLevel === 5,
        sixth: data.difficultyLevel === 6
    };
}

module.exports = {generateId, filterHomeViewCubes, calculateSelectedOption};