const { body, validationResult } = require('express-validator');

const validation = () => {
    return  [
        body('name')
            .notEmpty()
            .withMessage("name must be provided"),
        body('rate')
            .notEmpty()
            .withMessage("rate must be provided")
    ]
}

module.exports = { validation };