const User = require("../models/User");
const { validatePassword, createToken } = require("../utils/authUtils");
const { errorResponse } = require("../utils/errorUtils");
const { validateUserData } = require("../utils/validators");


function login(req, res) {
    const {email, password} = req.body;

    const validUserData = validateUserData(email, password);

    if (validUserData !== true) {
        return errorResponse(res, 400, validUserData);
    }

    User.findOne({email})
    .then(user => {
        validatePassword(password, user.password)
        .then(result => {
            if (result) {
                const token = createToken(user);

                console.log(`User: ${email} successfully registered!`);
                
                res.status(200).json({token, email, userId: user._id});
            
            } else {
                console.log("Invalid Password");

                errorResponse(res, 404, "Invalid Email or Password");
            }
        })
        .catch(err => {
            console.error(err);

            errorResponse(res, 500, "Internal Server Error!");
        });
    })
    .catch(err => {
        console.error(err);
        errorResponse(res, 500, "Internal Server Error!");
    });
}


module.exports = login;