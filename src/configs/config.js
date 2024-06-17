const config = {
  SERVER_PORT: process.env.SERVER_PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_EXPIRES_IN: process.env.ACCESS_EXPIRES_IN,
  REFRESH_EXPIRES_IN: process.env.REFRESH_EXPIRES_IN,
};

module.exports = config;
