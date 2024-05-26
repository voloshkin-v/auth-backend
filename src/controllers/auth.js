const authService = require('~/services/auth');

const signUp = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  const userData = await authService.signUp(firstName, lastName, email, password, role);

  res.status(201).json(userData);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const tokens = await authService.login(email, password);

  // TODO: add refresh to Cookies

  res.status(200).json(tokens);
};

module.exports = {
  login,
  signUp,
};
