const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController.js');
const emailValidate = require('../Middlewares/emailValidation.js');

router.get('/', HomeController.renderHome);
router.post('/show', emailValidate, HomeController.show);


module.exports = router;