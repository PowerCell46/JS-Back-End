const {model, Schema} = require("mongoose");
const User = require("./user");


const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    signUpList:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Course = model("Course", courseSchema);


module.exports = Course;