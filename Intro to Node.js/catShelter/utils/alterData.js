const fs = require('fs');
const {jsonFiles} = require("../constants.js");


function writeData(newData, dataType) {
    let filePath = jsonFiles[dataType];

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            jsonData.push(newData);

            const newDataJson = JSON.stringify(jsonData, null, 4);

            fs.writeFile(filePath, newDataJson, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                }
                console.log('Data added to the file successfully.');
            });

        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}


function editData(newData, dataType, index) {
    let filePath = jsonFiles[dataType];

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            jsonData[index] = newData;

            const newDataJson = JSON.stringify(jsonData, null, 4);

            fs.writeFile(filePath, newDataJson, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                }
                console.log('Data altered successfully.');
            });

        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}


function deleteData(dataType, index) {
    let filePath = jsonFiles[dataType];
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            jsonData.splice(index, 1);

            const newDataJson = JSON.stringify(jsonData, null, 4);

            fs.writeFile(filePath, newDataJson, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    return;
                }
                console.log('Data altered successfully.');
            });

        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}


module.exports = {writeData, editData, deleteData};