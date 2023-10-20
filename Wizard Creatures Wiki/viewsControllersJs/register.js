const { hashPassword, createToken } = require("../createTokenHashPass");
const User = require("../schemas/UserSchema");


function getRegisterView(req, res) {
    if (req.user !== undefined) { // Checking if the user isn't already Logged in
        return res.render("404", {err: "You are already logged in!"});
    }
    res.render("register");
}


async function registerHandler(req, res) { // Checking if the user isn't already Logged in
    if (req.user !== undefined) {
        return res.render("404", {err: "You are already logged in!"});
    }
    
    const {firstName, lastName, email, password, repeatPassword} = req.body;
    
    if (firstName.length < 3 || lastName.length < 3 || email.length < 10 || password.length < 4) { // Validation of the input fields
        return res.render("register", 
        {err: "First Name and Last Name must be at least 3 characters, email at least 10 and the password at least 4!"});
    }

    try {

        if (password !== repeatPassword) {
            throw new Error("Password and Repeat password must match!");
        }
        const previousUser = await User.find({email});

        if (previousUser.length > 0) {
            throw new Error("There is already user with that email!");
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({firstName, lastName, email, password: hashedPassword});
        user.save();

        const token = await createToken(user._id, email);

        res.cookie("authenticationTokenCookie", token, {httpOnly: true});

        console.log(`User ${user.email} created his account successfully!`);

        res.redirect('/');
    
    } catch(err) {
        res.render('register', {err: err.message});
    }
}


module.exports = {getRegisterView, registerHandler}