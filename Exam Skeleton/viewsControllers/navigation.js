const fs = require("fs");

async function updateNavigation(loggedIn, error) {
    const mainHbsHTML = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Page - Crypto Web</title>
            <link rel="stylesheet" href="./static/css/styles.css">
        </head>

        <body>
            <header class="header">
                <nav>
                    <img src="./static/images/logo.png" class="logo">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">All Crypto</a></li>
                        ${loggedIn ? `
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Create Offer</a></li>
                        <li><a href="/logout">Logout</a></li>` 
                        : `<li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        ` }
                    </ul>
                </nav>
            </header>

        ${error ? 
        `<div>
            <div class="errorContainer">
                <p>${error}</p>
            </div>
        </div>`
        : ``}


        {{{body}}}


        <footer>
            <p>Back-End 2022</p>
        </footer>

        </body>

        </html>`
    
        
    fs.writeFile("./views/layouts/main.hbs", mainHbsHTML, (err) => {
        if (err) {
            throw new Error("There was an error getting the main.hbs file!");
        }
    });

}


module.exports = updateNavigation;