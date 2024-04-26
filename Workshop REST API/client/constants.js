export const tokenName = "token";


export const main = document.querySelector("main");


export const BASE_SERVER_URL = "http://localhost:5000";


export const navigation = document.querySelector("nav");


export const urlEndpoints = {
    products: "products",
    register: "register",
    login: "login",
    orders: "orders"
};


export const userDataReq = {
    emailMinLen: 6,
    emailMaxLen: 20,
    passMinLen: 6,
    passMaxLen: 20
};


export const productDataReq = {
    nameMinLen: 3,
    nameMaxLen: 20,
    priceMinVal: 0.1,
    priceMaxVal: 10000,
    factorMinVal: 0,
    factorMaxVal: 1,
    startingImgAdd: ["http://", "https://"]    
};