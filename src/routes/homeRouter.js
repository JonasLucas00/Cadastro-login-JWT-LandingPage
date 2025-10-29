const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController.js');
const jwtAuthMiddleware = require('../Middlewares/jwtMiddlware.js');

router.get('/', HomeController.renderHome);
router.post('/show', HomeController.show);


module.exports = router;