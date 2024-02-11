const { body, validationResult } = require('express-validator');
const Problem = require('../models/problem_model');

const getAllProblems = async function (req, res) {
    const problems = await Problem.find({}, { "__v": false });
    res.json({ status: "Success", data: { problems } });
}

const getSingleProblem = async function (req, res) {
    try {
        const problem = await Problem.findById(req.params.id);
        if (!problem) {
            return res.status(404).json({ msg: "Problem not found" });
        }
        return res.json({ status: "Success", data: { problem } });
    } catch (err) { 
        return res.status(400).json({ status: "Error", data: null, message: err.message, code: 400 });
    }
}

const addProblem = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ status: "Fail", data: { errors: errors.array() } });
    const newproblem = new Problem(req.body);
    await newproblem.save();
    res.json({ status: "Success", data: { newproblem } });
}

const updateProblem = async function (req, res) {
    const problemID = req.params.id;
    try {
        const updatedproblem = await Problem.updateOne({ _id: problemID }, { $set: { ...req.body } }); 
        return res.status(200).json({ status: "Success", data: { updatedproblem } });
    }
    catch (err) {
        return status(400).json({ status: "Error", data: null, message: err.message, code: 400 });
    }
}

const deleteProblem = async function (req, res) {
    try {
        const problemID = req.params.id;
        const response = await Problem.deleteOne({ _id: problemID });
        return res.status(200).json({ status: "Success", data: null });
    } catch (err) {
        return status(400).json({ status: "Error", data: null, message: err.message, code: 400 });
    }
}

module.exports = {
    getAllProblems,
    getSingleProblem,
    addProblem,
    updateProblem,
    deleteProblem
}