// const fs = require("fs");

// const stream = fs.createReadStream("./file.txt", {encoding: "utf8"});

// stream.on("data", (chunk) => {
//     console.log(chunk);
// })  

// stream.on("end", () => console.log("Reading has finished"));


// const fs = require("fs");

// const writeStream = fs.createWriteStream("./output.txt");

// writeStream.write("Doncho Pedala\n");
// writeStream.write("Stili Preebatora\n");
// writeStream.write("Ivailo Papazov Pedala\n");
// writeStream.write("Rosko Mrusnia Goblin Pedala");
// writeStream.end();

// const fs = require("fs");

// const readStream = fs.createReadStream("./file.txt");

// const writeStream = fs.createWriteStream("./output.txt");

// // readStream.pipe(writeStream);


// readStream.on("data", (chunk) => {
//     writeStream.write(chunk)
// });


// readStream.on("end", () => {
//     console.log("FINISHED READING");
//     writeStream.end();
// });



// const fs = require("fs");
// const zlib = require("zlib");

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./file.txt");

// const writeStream = fs.createWriteStream("./output.txt");


// readStream.pipe(gzip).pipe(writeStream);


const fs = require("fs/promises");

fs.readFile("./output.txt", {encoding: "utf8"})
.then(data => {
    console.log(data);
    fs.writeFile("./input.txt", data, "utf-8");
});  


