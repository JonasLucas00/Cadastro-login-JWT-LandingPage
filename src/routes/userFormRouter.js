const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const emailValidate = require('../Middlewares/emailValidation.js');

router.get('/', UserController.renderHome);
router.post('/show', emailValidate, UserController.show);


module.exports = router;