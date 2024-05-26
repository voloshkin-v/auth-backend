const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, select: false },
    role: {
      type: [String],
      enum: {
        values: ['role-1', 'role-2'],
        message: 'asdasd',
      },
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
