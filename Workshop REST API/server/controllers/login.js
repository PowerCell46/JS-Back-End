const User = require("../models/User");
const { validatePassword, createToken } = require("../utils/authUtils");

function login(req, res) {
    console.log("LOGIN");

    const {email, password} = req.body;

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

                res.status(403).send("Invalid Email or Password!");                
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("An Error occurred!");                
        });
    })
    .catch(err => {
        console.error(err);
        res.status(500).send("An Error occurred!");
    });
}


module.exports = login;