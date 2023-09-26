const fs = require('fs');
const jwt = require("jsonwebtoken");
const secret = require("../configFiles/config").SECRET;

async function updateNavigation(req, error) {
    const token = req.cookies.authenticationCookieToken;
    let navigation = "";

    try {
        const user = jwt.verify(token, secret).username;
        navigation = `
            <!DOCTYPE html>
                <html lang="en">
    
                <head>
                <meta charset="UTF-8">
                <title>About Page</title>
                <link href="/css/site.css" type="text/css" rel="stylesheet">
                <link rel='shortcut icon' type='image/x-icon' href='/images/favicon.png' />
                </head>
    
                <body>
                <div class="container">
                    <header>
                    <ul>
                        <li><h3 id="helloMessage">Hello, ${user}!</h3></li>
                        <li><img class="logo" src="/images/logo.png"></li>
                        <li><a href="/">Browse</a></li>
                        <li><a href="/create">Add a Cube</a></li>
                        <li><a href="/create/accessory">Add an Accessory</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/logout">logout</a></li>
                    </ul>
                    </header>
                ${error ? `
                <div id="notifications">
                    <p id="notification-message">
                        ${error}
                    </p>
                </div>` : ``
                }
                {{{body}}} 
                </div>
                <footer>@Cubicle: Exercise for Express.js and Handlebars</footer>
                </body>
    
                </html>`  

    } catch(err) {
        navigation =  `
        <!DOCTYPE html>
            <html lang="en">

            <head>
            <meta charset="UTF-8">
            <title>About Page</title>
            <link href="/css/site.css" type="text/css" rel="stylesheet">
            <link rel='shortcut icon' type='image/x-icon' href='/images/favicon.png' />
            </head>

            <body>
            <div class="container">
                <header>
                <ul>
                    <li><img class="logo" src="/images/logo.png"></li>
                    <li><a href="/">Browse</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
                </header>
            ${error ? `
            <div id="notifications">
                <p id="notification-message">
                    ${error}
                </p>
            </div>` : ``
            }
            {{{body}}} 
            </div>
            <footer>@Cubicle: Exercise for Express.js and Handlebars</footer>
            </body>

            </html>` 
    }
    
    fs.writeFile("./views/layouts/main.hbs", navigation, (err) => {
        if (err) {
            return console.log("There was an error updating the navigation...", err);
        }
    } );
}

module.exports = updateNavigation;

/*
<div id="notifications">
<p id="notification-message">
    Some error
</p>
</div>
*/