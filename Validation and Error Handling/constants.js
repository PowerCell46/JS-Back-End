const APP_PORT = 5000;

const DB_LOCATION = "./database.json";

const DB_CONNECTION_STR = "mongodb+srv://PowerCell46:PowerCell46@cluster0.xhq46jq.mongodb.net";

const DB_COURSE = "jsbackend";

const JWT_SECRET = "PowerCell46";


const cubeFieldRequirements = {
    nameMinLen: 3,
    descMinLen: 10,
    descMaxLen: 50,
    imageUrlStart: ['http', 'https'],
    diffMinVal: 1,
    diffMaxVal: 6   
}

const accessoryFieldRequirements = {
    descMaxLen: 20
}


module.exports = {APP_PORT, DB_LOCATION, cubeFieldRequirements, DB_CONNECTION_STR, accessoryFieldRequirements, DB_COURSE, JWT_SECRET};