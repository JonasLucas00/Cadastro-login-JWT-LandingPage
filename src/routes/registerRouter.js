const express = require('express');
const router = express.Router();
const RegisterContoller = require('../controllers/registerController.js');

router.post('/', RegisterContoller.store);
router.get('/index', RegisterContoller.index);

module.exports = router;