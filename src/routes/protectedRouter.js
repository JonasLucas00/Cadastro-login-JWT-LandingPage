const express = require('express');
const router = express.Router()
const ProtectedController = require('../controllers/protectedController.js');
const authMiddleware = require('../Middlewares/authMiddlware.js');

router.get('/', authMiddleware, ProtectedController.renderProtected);

module.exports = router;
