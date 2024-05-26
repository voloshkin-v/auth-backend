const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res);
    } catch (e) {
      next(e);
    }
  };
};

module.exports = asyncWrapper;
