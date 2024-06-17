const userService = require('~/services/user');
const { comparePassword } = require('~/utils/password');
const tokenService = require('~/services/token');

const signUp = async (firstName, lastName, email, password, role) => {
  const user = await userService.createUser(firstName, lastName, email, password, role);

  return {
    _id: user._id,
    email: user.email,
  };
};

const login = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new Error('User not found!');
  }

  const passwordMatch = await comparePassword(password, user.password);
  if (!passwordMatch) {
    throw new Error('Passwords do not match!');
  }

  const tokens = tokenService.generateTokens({ id: user.id });

  return tokens;
};

module.exports = {
  signUp,
  login,
};
