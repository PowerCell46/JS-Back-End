SERVER_PORT = 5000;

const DB_CONNECTION_STR = "mongodb+srv://PowerCell46:PowerCell46@cluster0.xhq46jq.mongodb.net";

const WORKSHOP_NAME = `workshoprestapi`;

const userDataReq = {
    emailMinLen: 6,
    emailMaxLen: 20,
    passMinLen: 6,
    passMaxLen: 20
};


const productDataReq = {
    nameMinLen: 3,
    nameMaxLen: 20,
    priceMinVal: 0.1,
    priceMaxVal: 10000,
    factorMinVal: 0,
    factorMaxVal: 1,
    startingImgAdd: ["http://", "https://"]    
};


const SALT_ROUNDS = 13;


const TOKEN_SECRET = "PowerCell46";


module.exports = {SERVER_PORT, DB_CONNECTION_STR, WORKSHOP_NAME, SALT_ROUNDS, TOKEN_SECRET, productDataReq, userDataReq};