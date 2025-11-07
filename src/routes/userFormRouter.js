const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserFormController.js');
const emailValidate = require('../Middlewares/emailValidation.js');

router.get('/', UserController.renderHome);
router.post('/show', emailValidate, UserController.show);


module.exports = router;