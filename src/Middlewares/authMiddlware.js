require('dotenv').config()
const jwt = require('jsonwebtoken')

function jwtAuth(req, res, next) {
    // Tenta buscar o token no header Authorization
    const authHeader = req.headers['authorization'];
    let token;
    if (authHeader) {
        const [bearer, t] = authHeader.split(' ');
        if (bearer === 'Bearer' && t) token = t;
    }
    // Se não encontrar, tenta buscar no cookie
    if (!token && req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token) {
        // return res.status(401).json({ error: 'Token não enviado' });
        console.log('Token não enviado')
        return res.render('UserForm', { errMsg: 'Faça login para acesssar a pagina' })
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.email = decoded.email;
        next();
    } catch (err) {
        // return res.status(401).json({ error: 'Token inválido ou expirado' });
        console.log('Token inválido ou expirado')
        return res.render('UserForm', { errMsg: 'Faça login para acesssar a pagina' })
    }
}

module.exports = jwtAuth