const APP_PORT = 5000;
const DB_LOCATION = "./database.json";


const cubeFieldRequirements = {
    nameMinLen: 3,
    descMinLen: 10,
    imageUrlStart: ['http', 'https'],
    diffMinVal: 1,
    diffMaxVal: 6   
}


module.exports = {APP_PORT, DB_LOCATION, cubeFieldRequirements};