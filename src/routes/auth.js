const express = require('express');

const authController = require('~/controllers/auth');
const asyncWrapper = require('~/middlewares/async-wrapper');

const router = express.Router();

router.get('/', () => {});

module.exports = router;
