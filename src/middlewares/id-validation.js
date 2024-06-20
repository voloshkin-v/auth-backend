const ObjectId = require('mongoose').Types.ObjectId;

const { createError } = require('~/utils/errors');
const {
  errors: { INVALID_DOCUMENT_ID },
} = require('~/constants/errors');

const idValidation = (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    next(createError(400, INVALID_DOCUMENT_ID));
  }

  next();
};

module.exports = idValidation;
