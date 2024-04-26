# Nodemon Configuration
1. initialize a project - <b>npm init --y</b>
2. install lite server - **npm i nodemon**
3. add a start command in the **scripts** package.json - 
```json
"scripts": {
    ...
    "start": "nodemon server.js"
}
```
4. run **npm start** to start the server



# Importing Files
```javascript
const {variable} = require("../folder/file");
```
No need to specify the file type!


# Exporting Files
```javascript
const sum = (a, b) => a + b;

module.exports = sum;
module.exports = {sum, ...};
```

