const fs = require('fs');


function writeData(newData, dataType) {
    let filePath = '';

    dataType === "breed" ? filePath = "data/breeds.json" : filePath = "data/cats.json";

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

module.exports = writeData;
