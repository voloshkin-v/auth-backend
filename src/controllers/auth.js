const authService = require('~/services/auth');
const {
  tokens: { REFRESH_TOKEN },
  refreshTokenExpiresInMs,
} = require('~/constants');

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userData = await authService.signUp(firstName, lastName, email, password);

  res.status(201).json(userData);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = await authService.login(email, password);

  res.cookie(REFRESH_TOKEN, refreshToken, { httpOnly: true, maxAge: refreshTokenExpiresInMs });
  res.status(200).json({ accessToken });
};

module.exports = {
  login,
  signUp,
};
