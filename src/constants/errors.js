const errors = {
  USER_NOT_FOUND: {
    code: 'USER_NOT_FOUND',
    message: 'User was not found',
  },
  INVALID_CREDENTIALS: {
    code: 'INVALID_CREDENTIALS',
    message: 'The password is incorrect or the user with given email does not exist',
  },
};

module.exports = {
  errors,
};
