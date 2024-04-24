const { cubeFieldRequirements, userFieldRequirements } = require("../constants");


function validateCubeOrAccessoryData(dataType, name, description, imageUrl, difficultyLevel) {
    if (name.length < cubeFieldRequirements.nameMinLen) {
        return `Name must be at least ${cubeFieldRequirements.nameMinLen} chars!`;
    }

    if (!lettersDigitsAndSpaceOnly(name)) {
        return 'Name must consist only of letters, digits and spaces!';
    }

    if (description.length < cubeFieldRequirements.descMinLen) {
        return `Description must be at least ${cubeFieldRequirements.descMinLen} chars!`;
    }

    if (!lettersDigitsAndSpaceOnly(description)) {
        return 'Description must consist only of letters, digits and spaces!';
    }

    if (dataType === "Cube" && (difficultyLevel < cubeFieldRequirements.diffMinVal || difficultyLevel > cubeFieldRequirements.diffMaxVal)) {
        return `Difficulty level must be between ${cubeFieldRequirements.diffMinVal} and ${cubeFieldRequirements.diffMaxVal}!`;
    }

    if (dataType === "Cube" && (!imageUrl.startsWith(cubeFieldRequirements.imageUrlStart[0]) && !imageUrl.startsWith(cubeFieldRequirements.imageUrlStart[1]))) {
        return `Image url must start either with "http://" either with "https://"!`;
    }

    return true;
}


function validateUserData(username, password) {
    if (!lettersAndDigitsOnly(username)) {
        return "Username must only contain letters and digits!";
    }

    if (!lettersAndDigitsOnly(password)) {
        return "Password must only container letters and digits!";
    }

    if (username.length < userFieldRequirements.userMinLen) {
        return `Username must be at least ${userFieldRequirements.userMinLen} chars!`;
    }

    if (password.length < userFieldRequirements.passMinLen) {
        return `Password must be at least ${userFieldRequirements.passMinLen} chars!`;
    }

    return true;
}


function lettersAndDigitsOnly(variable) {
    return variable.split("").filter(letter => 
        letter.toUpperCase().charCodeAt(0) < 48 || 
        (letter.toUpperCase().charCodeAt(0) > 57 && letter.toUpperCase().charCodeAt(0) < 65) ||
        letter.toUpperCase().charCodeAt(0) > 90).length === 0;
}


function lettersDigitsAndSpaceOnly(variable) {
    return variable.split("").filter(letter => 
        letter.charCodeAt(0) !== 32 &&
        letter.toUpperCase().charCodeAt(0) < 48 || 
        (letter.toUpperCase().charCodeAt(0) > 57 && letter.toUpperCase().charCodeAt(0) < 65) ||
        letter.toUpperCase().charCodeAt(0) > 90).length === 0;
}


module.exports = {validateCubeOrAccessoryData, validateUserData};