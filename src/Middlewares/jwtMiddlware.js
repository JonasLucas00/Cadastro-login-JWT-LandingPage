require('dotenv').config()
const jwt = require('jsonwebtoken')

function jwtAuth(req, res, next) {
    console.log('jwtAuth')
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não enviado' });
    }

    // "Bearer token"
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Formato de token inválido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.email = decoded.email; // email disponivel nos controllers subsequentes
        console.log(`${authHeader}\n`)
        next();

    } catch (err) {
        console.log(`${authHeader}\n ${err}`)
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
}

module.exports = jwtAuth