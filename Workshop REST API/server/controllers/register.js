const User = require("../models/User");
const { hashPassword, createToken } = require("../utils/authUtils");
const { errorResponse } = require("../utils/errorUtils");
const { validateUserData } = require("../utils/validators");


function register(req, res) {
    let {email, password} = req.body;
    email = email.trim();

    const validUserData = validateUserData(email, password);

    if (validUserData !== true) {
        return errorResponse(res, 400, validUserData);
    }

    hashPassword(password)
    .then(hashedPass => {
        User.create({email, password: hashedPass})
        .then(user => {
            const token = createToken(user);

            console.log(`User: ${email} successfully registered!`);
            
            res.status(200).json({token, email, userId: user._id});
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


module.exports = register;