const mongoose = require('mongoose'); // import mongo db

const problemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    tutorial: {
        type: String,
        required: true
    },
    constraints: {
        type: [String],
        required: true
    },
    examples: {
        type: [String],
        required: true
    },
    contest: {
        type: String,
        required: true
    },
    topics: {
        type: [String],
        required: true
    },
    users_solved: {
        type: Number,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Problem', problemSchema);