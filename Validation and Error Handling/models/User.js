const {model, Schema} = require("mongoose");
const { userFieldRequirements } = require("../constants");


const userSchema = new Schema({
    username: {
        required: true,
        type: String,
        unique: true,
        minLength: userFieldRequirements.userMinLen
    },
    password: {
        required: true,
        type: String,
        minLength: userFieldRequirements.passMinLen
    }   
});


const User = model("User", userSchema);


module.exports = User;