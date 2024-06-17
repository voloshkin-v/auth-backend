const express = require('express');

const asyncWrapper = require('~/middlewares/async-wrapper');
const idValidation = require('~/middlewares/id-validation');
const auth = require('~/middlewares/auth');
const userController = require('~/controllers/user');

const router = express.Router();

router.param('id', idValidation);

router.get('/', auth.verifyAuth, asyncWrapper(userController.getUsers));
router.get('/:id', asyncWrapper(userController.getUserById));
router.delete('/:id', asyncWrapper(userController.deleteUser));
router.patch('/:id', asyncWrapper(userController.updateUser));

module.exports = router;
