const { createToken } = require("../createTokenHashPass");
const User = require("../schemas/userSchema");
const bcrypt = require("bcrypt");


async function loginHandler(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    
    if (!user) {
        throw new Error("Invalid email or password!");
    }

    const thePasswordIsCorrect = await bcrypt.compare(password, user.password);
    
    if (!thePasswordIsCorrect) {
        throw new Error("Invalid  email or password!");
    }

    console.log(`User found: \n${user.email}`);  // Printing the current logged user

    const token = await createToken(user._id, user.email);
    
    res.json({_id: user._id, email: user.email, accessToken: token});

}


module.exports = loginHandler;