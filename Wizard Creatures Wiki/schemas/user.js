const {model, Schema} = require("mongoose");


const userSchema = new Schema({
    user: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        minLength: 10
    },
    password: {
        type: String,
        required: true
    }
});


const User = model("User", userSchema);


module.exports = User;