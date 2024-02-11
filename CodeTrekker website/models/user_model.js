const mongoose = require('mongoose'); 

const validator = require('validator');

const userSchema = new mongoose.Schema({
    handle: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validator.isEmail, "field must be a valid email address"]
    },
    password: {
        type: String,
        required: true
    },
    number_of_friends: {
        type: Number
    },
    title: {
        type: String
    },
    country: {
        type: String
    },
    university: {
        type: String
    },
    contribution: {
        type: Number
    },
    contest_rating: {
        type: Number
    },
    visible: {
        type: Boolean
    },
    teams: {
        type: [String]
    },
    max_rating: {
        type: Number
    },
    favorites: {
        type: [String]
    },
    token: {
        type: String
    }

} );


module.exports = mongoose.model('User', userSchema);