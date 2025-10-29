const express = require('express');
const router = express.Router();
const RegisterContoller = require('../controllers/registerController.js');
const jwtAuthMiddleware = require('../Middlewares/jwtMiddlware.js');

// router.get('/', RegisterContoller.renderRegister)
// router.post('/show', RegisterContoller.show);
router.post('/', RegisterContoller.store);
router.get('/index', RegisterContoller.index);
router.delete('/deleteOne', RegisterContoller.deleteOne);
router.delete('/deleteAll', RegisterContoller.deleteAll);

module.exports = router;