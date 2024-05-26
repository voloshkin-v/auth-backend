const bcrypt = require('bcrypt');

const hashPasword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (plainPassword, hashPassword) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};

module.exports = {
  hashPasword,
  comparePassword,
};
