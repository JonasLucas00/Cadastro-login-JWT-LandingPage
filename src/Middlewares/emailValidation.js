const validator = require('validator')

module.exports = function emailValidate(req, res, next) {
    const validEmail = validator.isEmail(req.body.email)
    if (!validEmail) {
        return res.json('Email invalido')
    }
    next();
}