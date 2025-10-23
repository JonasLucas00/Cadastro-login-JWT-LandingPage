const { Users } = require('../models');

class Register {

    async store(req, res) {
        if (!req.body) {
            return res.json('sem parametros');
        }

        try {
            const user = await Users.create({
                email: req.body.email,
                password: req.body.password
            })
            console.log('Register-store efetuado!');

            return res.json({
                message: 'Usuario criado',
                user: user
            })
        } catch (error) {
            console.log(error);
            return res.json(`Register-store ERRO`);
        }

    }

    async index(req, res) {
        try {
            const users = await Users.findAll()
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

    }

    async deleteAll(req, res) {

    }
}

module.exports = new Register()