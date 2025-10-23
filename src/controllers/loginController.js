const jwt = require('jsonwebtoken');
require('dotenv').config();

class LoginController {

    login(req, res) {
        // console.log(req.body)
        const token = jwt.sign(
            { email: req.body.email, password: req.body.password },
            process.env.TOKEN_SECRET,
            { expiresIn: '1d' }
        )
        console.log(token)
        return res.json({ token: token })
    }
}

module.exports = new LoginController()