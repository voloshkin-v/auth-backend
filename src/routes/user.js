const express = require('express');

const userController = require('~/controllers/user');
const asyncWrapper = require('~/middlewares/async-wrapper');
const idValidation = require('~/middlewares/id-validation');

const router = express.Router();

router.param('id', idValidation);

router.get('/', asyncWrapper(userController.getUsers));
router.get('/:id', asyncWrapper(userController.getUserById));
router.delete('/:id', asyncWrapper(userController.deleteUser));
router.patch('/:id', asyncWrapper(userController.updateUser));

module.exports = router;
