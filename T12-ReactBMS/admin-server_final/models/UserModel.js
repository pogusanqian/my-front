const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // 用户名
  password: { type: String, required: true }, // 密码
  phone: String,
  email: String,
  create_time: { type: Number, default: Date.now },
  role_id: String
});

module.exports = mongoose.model('users', userSchema);