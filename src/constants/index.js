const tokens = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
};

const refreshTokenExpiresInMs = 1000 * 60 * 60 * 24; // maxAge for refresh token in ms

module.exports = { tokens, refreshTokenExpiresInMs };
