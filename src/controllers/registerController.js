const { Users } = require('../models');

class Register {

    async store(req, res) {
        if (!req.body) {
            return res.json('sem parametros');
        }

        if (req.body.input_password.length < 6 || typeof req.body.input_password !== 'string') {
            return res.render('registerView', { errMsg: 'Verifique a senha', email: req.body.email })
        }
        console.log(req.body)
        try {
            const user = await Users.create({
                email: req.body.email,
                input_password: req.body.input_password
            })
            console.log(`usuario adicionado ${JSON.stringify(user)}`);

            return res.render('loginView', { email: req.body.email, message: 'Usuario criado! Efetue login acima' })
        } catch (error) {
            console.log(`Register-store ${error}`);
            return res.render('registerView', { errMsg: 'Verifique a senha', email: req.body.email })
        }

    }

    async index(req, res) {
        try {
            const users = await Users.findAll();
            console.log(`Register-index efetuado`);
            return res.json({
                message: 'Lista de users',
                users: users
            })
        } catch (error) {
            console.log(error);
            return res.json('erro index')
        }
    }

    async show(req, res) {

    }

    async deleteOne(req, res) {
        if (!req.body) {
            return res.json('sem parametros')
        }
        try {
            const user = await Users.findOne({ where: { email: req.body.email } })

            if (!user) {
                return res.json('usuario não localizado');
            }
            await user.destroy()
            return res.json('usuario apagado')

        } catch (error) {
            console.log('Erro Register-deleteOne')
            return
        }
    }

    async deleteAll(req, res) {
        try {
            await Users.destroy({ where: {} });
            console.log('usuarios apagados');
            return res.json('Usuarios apagados')
        } catch (error) {
            console.log(error)
            return res.json('Usuarios apagados')
        }
    }
}

module.exports = new Register()