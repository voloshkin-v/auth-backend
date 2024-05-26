const ObjectId = require('mongoose').Types.ObjectId;

const idValidation = (req, res, next) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    next(new Error('NOT VALID OBJECT ID'));
  }

  next();
};

module.exports = idValidation;
