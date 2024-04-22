const { cubeFieldRequirements } = require("./constants");


function validateCubeData(name, description, imageUrl, difficultyLevel) {
    
    return name.length < cubeFieldRequirements.nameMinLen || 
    description.length < cubeFieldRequirements.descMinLen ||
    difficultyLevel < cubeFieldRequirements.diffMinVal ||
    difficultyLevel > cubeFieldRequirements.diffMaxVal ||
    (!imageUrl.startsWith(cubeFieldRequirements.imageUrlStart[0]) &&
    !imageUrl.startsWith(cubeFieldRequirements.imageUrlStart[1]))
    ? false : true;
}


function validateImageUrl(imageUrl) {
    return imageUrl.startsWith("http://") || imageUrl.startsWith("https://");
}


module.exports = {validateCubeData, validateImageUrl};