const User = require('~/models/user');
const { hashPasword } = require('~/utils/password');

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
  return await User.findOne({ email }).select('+password').exec();
};

const createUser = async (firstName, lastName, email, password, role) => {
  const user = await getUserByEmail(email);

  if (user) {
    throw new Error('USER ALREADY EXIST!'); // TODO
  }

  const hashedPassword = await hashPasword(password);

  return await User.create({ firstName, lastName, email, password: hashedPassword, role });
};

const updateUser = () => {}; // TODO

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
