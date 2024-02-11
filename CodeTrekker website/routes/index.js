'use strict';
var express = require('express');
var router = express.Router();
const { body, validationResult } = require('express-validator');
const problemsController = require('../controllers/problems_controllers');
const { validation } = require('../middleware/validation');

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
router.delete('/api/problems/:id', problemsController.deleteProblem );

module.exports = router;
