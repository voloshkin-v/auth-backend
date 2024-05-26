const User = require('~/models/user');

const getUsers = async () => {
  const users = await User.find();
  const count = 0;

  return {
    count,
    users,
  };
};

const getUserById = async (id) => {
  return await User.findById(id).exec();
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};

const createUser = async (firstName, lastName, email, password) => {
  const user = await getUserByEmail(email);

  if (user) {
    throw new Error('USER ALREADY EXIST!'); // TODO
  }

  return await User.create({ firstName, lastName, email, password });
};

const updateUser = (id) => {};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id).exec();
};

module.exports = {
  getUserByEmail,
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
