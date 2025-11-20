const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

class LoginController {

    renderLogin(req, res) {
        res.render('loginView', { errMsg: req.query.errMsg })
    }

    async login(req, res) {
        console.log(req.body.input_password);

        if (!req.body.input_password || !req.body.email) {
            return res.render('loginView', { errMsg: 'Preencha todos os campos', email: req.body.email })
        }

        if (req.body.input_password.length < 6 || typeof req.body.input_password !== 'string') {

            return res.render('loginView', { errMsg: 'Verifique a senha', email: req.body.email });
        }

        try {
            const user = await Users.findOne({ where: { email: req.body.email } })

            if (!user) {
                return res.json('Usuario não encontrado');
            }

            const match = await user.passValidate(req.body.input_password)
            if (!match) {
                return res.render('loginView', { errMsg: 'Verifique a senha', email: req.body.email });
            }

            const token = jwt.sign(
                { email: req.body.email },
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