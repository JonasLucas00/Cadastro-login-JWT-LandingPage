const { Users } = require('../models');

class Register {

    async store(req, res) {
        if (!req.body) {
            return res.json('sem parametros');
        }
        console.log(req.body)
        try {
            const user = await Users.create({
                email: req.body.email,
                input_password: req.body.password
            })
            console.log(`usuario adicionado ${JSON.stringify(user)}`);

            return res.json('Usuario criado')
        } catch (error) {
            console.log(error);
            return res.json(`Register-store ERRO`);
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