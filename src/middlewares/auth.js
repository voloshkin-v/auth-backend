const tokenService = require('~/services/token');
const extractTokenFromHeaders = require('~/utils/token');

const verifyAuth = (req, res, next) => {
  const token = extractTokenFromHeaders(req);
  if (!token) {
    throw new Error('401');
  }

  const payload = tokenService.verifyAccessToken(token);
  if (!payload) {
    throw new Error('401');
  }

  req.user = payload;
  next();
};

const restrictTo = () => {};

module.exports = {
  verifyAuth,
  restrictTo,
};
