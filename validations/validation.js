const {body, validationResult} = require('express-validator');

const userValidationRules = () => {
    return [
        body('username').not().isEmpty().withMessage('Email Wajib Diisi')
        .bail().
        isEmail().withMessage('Email tidak Valid'),
        //Password
        body('password').not().isEmpty().withMessage('Password Wajib Diisi')
        .bail().
        isLength({ min: 5 }).withMessage('Password Minimal 5 Karakter'),
        //Role_ID
        body('role_id').not().isEmpty().withMessage('Role ID Wajib Diisi')
        .bail().
        isIn([1, 2, 3, 4]).withMessage('Role ID tidak tersedia'),
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }

    const extractedErrors = []
    errors.array().map(err => extractedErrors.push(
        {
        [err.param]: err.msg
        }
    ))

    return res.status(422).json({
        errors: extractedErrors
    })
}

module.exports = {
    userValidationRules,
    validate
}