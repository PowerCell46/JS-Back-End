const {model, Schema} = require("mongoose");


const userSchema = new Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});


const User = model("User", userSchema);


module.exports = User;