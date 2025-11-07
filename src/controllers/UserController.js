const { Users } = require('../models')

class UserController {

    renderHome(req, res) {
        res.render('userForm');
    }

    async show(req, res) {
        console.log(`home-Show ${req.body.email}`)
        const { email } = req.body
        try {
            const user = await Users.findOne({ where: { email: email.toLowerCase() } });
            if (!user) {
                return res.render('registerView', { email });
            }
            return res.render('loginView', { email })
        } catch (error) {
            console.log(error)
            return res.json('Erro show')
        }
    }

}

module.exports = new UserController()