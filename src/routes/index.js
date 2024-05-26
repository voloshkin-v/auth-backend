const express = require('express');
const router = express.Router();

const userRouter = require('~/routes/user');
const authRouter = require('~/routes/auth');

router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;
