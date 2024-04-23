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


// ???

const listeners = {};


function publish(eventName, ...args) {
    if (!listeners[eventName]) {
        return 
    };

    listeners[eventName].forEach(listener => listener(...args));
}


function subscribe(eventName, eventListener) {
    if (!listeners[eventName]) {
        listeners[eventName] = [];
    }

    listeners[eventName].push(eventListener);

    return () => {
        listeners[eventName] =  listeners[eventName].filter((list) => list !== eventListener);
        console.log(`You have been unsubscribed from ${eventName}.`);
    }
}


subscribe("ivan-added", () => console.log("Hello there"));

subscribe("ivan-added", (age) => console.log(`I am ${age} years old.`));

subscribe("ivan-added", (age, friend, activity) => console.log(`С авера ${friend} ще ${activity}!`));

publish("ivan-added", 16, "Stilitoo", "ходиме у Флейма");















/* #region Main */

router.route("/")
.get((req, res) => {
    // ... 
})
.post((req, res) => {
    // ...
})
.put((req, res) => {
    // ...
})
.delete((req, res) => {
    // ...
});
/* #endregion */






// const mongodb = require("mongodb");
const { DB_CONNECTION_STR } = require("./constants");
const Dog = require("./models/Dog");

// const client = new mongodb.MongoClient(DB_CONNECTION_STR);

// async function connectToDB() {
//     client.connect();

//     const db = client.db("test");

//     const users = db.collection("users");

//     const dbUsers = await users.find().toArray();

//     console.log(dbUsers);
// }


// connectToDB();


const mongoose = require("mongoose");

async function connectToDB() {
    await mongoose.connect(`${DB_CONNECTION_STR}jsbackend`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }); 

    const dogs = await Dog.find();

    dogs.forEach(dog => console.log(dog.description));

    // console.log(dogs);
}

connectToDB();