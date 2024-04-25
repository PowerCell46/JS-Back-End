SERVER_PORT = 5000;

const DB_CONNECTION_STR = "mongodb+srv://PowerCell46:PowerCell46@cluster0.xhq46jq.mongodb.net";

const WORKSHOP_NAME = `workshoprestapi`;

const userSchemaVal = {
    usernameMinLen: 5,
    usernameMaxLen: 30
}

const SALT_ROUNDS = 13;


const TOKEN_SECRET = "PowerCell46";


module.exports = {SERVER_PORT, DB_CONNECTION_STR, WORKSHOP_NAME, userSchemaVal, SALT_ROUNDS, TOKEN_SECRET};