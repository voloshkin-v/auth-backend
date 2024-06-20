const errors = {
  USER_NOT_FOUND: {
    code: 'USER_NOT_FOUND',
    message: 'The user with given email does not exist',
  },
  INVALID_CREDENTIALS: {
    code: 'INVALID_CREDENTIALS',
    message: 'The password is incorrect or the user with given email does not exist',
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    message: 'Requested URL was not found',
  },
  INVALID_DOCUMENT_ID: {
    code: 'INVALID_DOCUMENT_ID',
    message: 'Document ID is not valid',
  },
};

module.exports = {
  errors,
};
