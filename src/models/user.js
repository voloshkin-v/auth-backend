const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
