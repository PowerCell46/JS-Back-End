function upperBase() {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="../content/styles/site.css">
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
        <title>Cat Shelter</title>
    </head>

    <body>
    `;
}


function lowerBase() {
    return `
        </body>

    </html>`
}


module.exports = {upperBase, lowerBase};