const {Schema, model} = require("mongoose");


const userSchema = new Schema({
    username: {
        type: String,
        required: true // Add more things
    },
    email: {
        type: String,
        required: true // Add more things
    },
    password: {
        type: String,
        required: true // Add more things
    }
});


const User = model("User", userSchema);


module.exports = User;