const {model, Schema} = require("mongoose");


const UserSchema = new Schema({
    user: {
        type: String,
        required: true,
        minLength: 2
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


const User = model("User", UserSchema);


module.exports = User;