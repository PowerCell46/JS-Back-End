const { userDataReq, productDataReq } = require("../utils/constants");


function validateUserData(email, password) {
    if (!email.includes("@")) {
        return "Email must contain @ sign!";
    }

    if (email.length < userDataReq.emailMinLen || email.length > userDataReq.emailMaxLen) {
        return `Email length must be between ${userDataReq.emailMinLen} and ${userDataReq.emailMaxLen} chars!`;
    }

    if (password.length < userDataReq.passMinLen) {
        return `Password length must be between ${userDataReq.passMinLen} and ${userDataReq.passMaxLen} chars!`;
    }

    return true;
}


function validateProductData(name, price, factor, img) {
    if (name.length < productDataReq.nameMinLen || name.length > productDataReq.nameMaxLen) {
        return `Name length must be between ${productDataReq.nameMinLen} and ${productDataReq.nameMaxLen}!`;
    }

    if (price < productDataReq.priceMinVal || price > productDataReq.priceMaxVal) {
        return `Price must be between ${productDataReq.priceMinVal} and ${productDataReq.priceMaxVal}!`;
    }

    if (factor < productDataReq.factorMinVal || factor > productDataReq.factorMaxVal) {
        return `Factor must be between ${productDataReq.factorMinVal} and ${productDataReq.factorMaxVal}!`;
    }

    if (!img.startsWith(productDataReq.startingImgAdd[0]) && !img.startsWith(productDataReq.startingImgAdd[1])) {
        return `Image must start either with ${productDataReq.startingImgAdd[0]} either with ${productDataReq.startingImgAdd[1]}!`;
    }

    return true;
}


module.exports = {validateUserData, validateProductData};