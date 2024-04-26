const {model, Schema} = require("mongoose");
const { userDataReq } = require("../utils/constants");


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: userDataReq.usernameMinLen,
        maxlength: userDataReq.usernameMaxLen
    },
    password: {
        type: String,
        required: true
    },
    orders: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],
        default: []
    }
});


const User = model("User", userSchema);


module.exports = User;