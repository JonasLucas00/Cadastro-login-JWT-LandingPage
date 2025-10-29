const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

class LoginController {

    renderLogin(req, res) {

    }

    async login(req, res) {
        // console.log(Users.passValidate(req.body.input_password))
        if (!req.body) {
            return res.json('Sem parametros')
        }

        try {
            const user = await Users.findOne({ where: { email: req.body.email } })

            if (!user) {
                return res.json('Usuario não encontrado');
            }

            const match = await user.passValidate(req.body.input_password)
            if (!match) {
                return res.json('Verifique a senha!');
            }

            const token = jwt.sign(
                { email: req.body.email, password: req.body.password },
                process.env.TOKEN_SECRET,
                { expiresIn: '1d' }
            )
            console.log(token)
            return res.json({ token: token })

        } catch (error) {
            console.log(error);
            return res.json('Erro no login')
        }


    }
}

module.exports = new LoginController()