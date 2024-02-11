

const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllUsers = async function (req, res) {
    const users = await User.find({}, { "__v": false, "password": false });
    res.json({ status: "Success", data: { users } });
}


const register = async function (req, res) {
    const { handle, email, password } = req.body;
    const olduser = await User.findOne({ email: email });
    if (olduser) {
        return res.status(400).json({ status: "user already exists", data: null, code: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = new User({
        handle, email, password: hashedPassword
    })
    const token = await jwt.sign({ email: newuser.email, id: newuser._id }, process.env.JWT_SECRET_KEY, {expiresIn:'10m'});
    newuser.token = token;

    await newuser.save();
    return res.json({ status: "Success", data: { newuser } });
  
}


const login = async function (req, res) {
    const { email, password } = req.body;
    const olduser = await User.findOne({ email: email });
    if (!email||!password) {
        return res.status(400).json({ status: "email and password are required", data: null, code: 400 });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(500).json({ status: "user not found", data: null, code: 500 });

    }
    const is_pass = await bcrypt.compare(password, user.password);
    if (is_pass) {

        const token = await jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });
        user.token = token;
        return res.json({ status: "Success", data: { user } }); 
    }
    else {
        return res.status(500).json({ status: "email and password donot match", data: null, code: 500 });
    }
}

module.exports = {
    getAllUsers,
    register,
    login
}
