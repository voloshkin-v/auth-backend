const jwt = require('jsonwebtoken');
const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN,
} = require('~/configs/config');

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_EXPIRES_IN });

  return {
    accessToken,
    refreshToken,
  };
};

const verifyToken = (token, secretKey) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (e) {
    return null;
  }
};

const verifyAccessToken = (token) => {
  return verifyToken(token, ACCESS_TOKEN_SECRET);
};

module.exports = {
  generateTokens,
  verifyAccessToken,
};
