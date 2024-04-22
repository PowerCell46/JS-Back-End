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