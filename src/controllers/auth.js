const authService = require('~/services/auth');

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userData = await authService.signUp(firstName, lastName, email, password);

  res.status(201).json(userData);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = await authService.login(email, password);

  res.status(200).json({ accessToken });
};

module.exports = {
  login,
  signUp,
};
