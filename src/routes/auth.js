const express = require('express');

const authController = require('~/controllers/auth');
const asyncWrapper = require('~/middlewares/async-wrapper');

const router = express.Router();

router.post('/signup', asyncWrapper(authController.signUp));
router.post('/login', asyncWrapper(authController.login));
router.post('/logout', asyncWrapper(authController.logout));

module.exports = router;
