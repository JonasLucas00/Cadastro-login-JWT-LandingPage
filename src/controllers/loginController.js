const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

class LoginController {


    async login(req, res) {
        console.log(req.body.input_password);

        if (!req.body.input_password || !req.body.email) {
            return res.json('Preencha todos os campos')
        }

        if (req.body.input_password.length < 6 || typeof req.body.input_password !== 'string') {
            return res.json('Verifique a senha')
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
                { expiresIn: '2h' }
            )
            console.log(token)

            res.cookie("token", token, {
                httpOnly: true,
                secure: true,      // true em produção (HTTPS)
                sameSite: "strict", // previne CSRF
                maxAge: 2 * 60 * 60 * 1000
            });

            return res.render('home')

        } catch (error) {
            console.log(error);
            return res.json('Erro no login')
        }


    }
}

module.exports = new LoginController()