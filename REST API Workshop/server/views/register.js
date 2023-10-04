
const { hashPasswordFunc, createToken } = require("../createTokenHashPass");
const User = require("../schemas/userSchema")


async function registerHandler(req, res) {
    let { email, password } = req.body;
    
    if (await User.findOne({email})) {
        throw new Error("email not available!");
    }

    password = await hashPasswordFunc(password);

    const user = new User({email, password});
    await user.save();

    console.log(`Successfully created user: \n${user.email}`); // Logging the created user

    const token = await createToken(user._id, user.email); 

    res.json({_id: user._id, email: user.email, accessToken: token});
}


module.exports = registerHandler;

