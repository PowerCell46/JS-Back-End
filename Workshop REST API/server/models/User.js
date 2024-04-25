const {model, Schema} = require("mongoose");
const { userSchemaVal } = require("../utils/constants");


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: userSchemaVal.usernameMinLen,
        maxlength: userSchemaVal.usernameMaxLen
    },
    password: {
        type: String,
        required: true
    }
});


const User = model("User", userSchema);


module.exports = User;