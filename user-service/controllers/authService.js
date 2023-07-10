const User = require('../models/authService');
const jwt = require("jsonwebtoken")

const createUsers = async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if(userExists) {
        return res.json({ message: "User already exists"});
    } else {
        const newUser = new User({
            name,
            email,
            password,
        });
        newUser.save();
        return res.json(newUser);
    }
}

const userLogin = async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ message: "User doesn't exist"})
    } else {

        if (password !== user.password) {
            return res.json({ message: "Password Incorrect" });
        }
        const payload= {
            email,
            name: user.name
        };
        jwt.sign(payload, "secret", (err, token) => {
            if(err) console.log(err);
            else {
                return res.json({ token: token })
            }
        });
    }
};

module.exports = {
    createUsers, userLogin
   }

