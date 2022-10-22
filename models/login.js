const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'กรุณาใส่ Username'],
    },
    password: {
      type: String,
      required: [true, 'กรุณาใส่ Password'],
    },
  },
  { timestamps: true, versionKey: false }
);
const User = (module.exports = mongoose.model('users', userSchema));
module.exports = User;
