'use strict';
var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const problemsController = require('../controllers/problems_controllers');
const userController = require('../controllers/user_controllers');
const { validation } = require('../middleware/validation');
const { verifytoken } = require('../middleware/verifytoken');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});




// get all problems
router.get('/api/problems', problemsController.getAllProblems);

// get single problem
router.get('/api/problems/:id', problemsController.getSingleProblem );

// add problem
router.post('/api/problems', problemsController.addProblem );

// upate problem
router.patch('/api/problems/:id', problemsController.updateProblem);

//delete problem
router.delete('/api/problems/:id', problemsController.deleteProblem);

// get all users
router.get('/api/users', userController.getAllUsers);

// register
router.post('/api/users/register', userController.register);

// login
router.post('/api/users/login', userController.login);

module.exports = router;
