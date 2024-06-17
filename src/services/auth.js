const userService = require('~/services/user');
const tokenService = require('~/services/token');
const { comparePassword } = require('~/utils/password');
const { createError } = require('~/utils/errors');
const {
  errors: { USER_NOT_FOUND, INVALID_CREDENTIALS },
} = require('~/constants/errors');

const signUp = async (firstName, lastName, email, password) => {
  const user = await userService.createUser(firstName, lastName, email, password);

  return {
    _id: user._id,
    email: user.email,
  };
};

const login = async (email, password) => {
  const user = await userService.getUserByEmail(email);

  if (!user) {
    throw createError(404, USER_NOT_FOUND);
  }

  const passwordMatch = await comparePassword(password, user.password);
  if (!passwordMatch) {
    throw createError(401, INVALID_CREDENTIALS);
  }

  const tokens = tokenService.generateTokens({ id: user.id });

  return tokens;
};

module.exports = {
  signUp,
  login,
};
