const express = require('express');

const userController = require('~/controllers/user');
const asyncWrapper = require('~/middlewares/async-wrapper');

const router = express.Router();

router.get('/', asyncWrapper(userController.getUsers));
router.get('/:id', asyncWrapper(userController.getUserById));
router.patch('/:id', asyncWrapper(userController.updateUser));
router.delete('/:id', asyncWrapper(userController.deleteUser));

module.exports = router;
