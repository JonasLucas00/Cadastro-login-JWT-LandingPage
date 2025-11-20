require('dotenv').config()
const jwt = require('jsonwebtoken')

function jwtAuth(req, res, next) {

    const authHeader = req.headers['authorization'];
    let token;
    if (authHeader) {
        const [bearer, t] = authHeader.split(' ');
        if (bearer === 'Bearer' && t) token = t;
    }

    if (!token && req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token) {

        console.log('Token não enviado')
        return res.render('UserForm', { errMsg: 'Faça login para acesssar a pagina' })
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.email = decoded.email;
        next();
    } catch (err) {

        console.log('Token inválido ou expirado')
        return res.render('UserForm', { errMsg: 'Faça login para acesssar a pagina' })
    }
}

module.exports = jwtAuth