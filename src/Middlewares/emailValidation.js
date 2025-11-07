const validator = require('validator')

module.exports = function emailValidate(req, res, next) {
    const validEmail = validator.isEmail(req.body.email)
    if (!validEmail) {
        return res.render('UserForm', { errMsg: 'Verifique campo email' })
    }
    next();
}

// Já consta 'teste' vindo do emailValidation