const express = require('express');
const router = express.Router()
const HomeController = require('../controllers/homeController.js');
const authMiddleware = require('../Middlewares/authMiddlware.js');

router.get('/', authMiddleware, HomeController.renderHome);

module.exports = router;
