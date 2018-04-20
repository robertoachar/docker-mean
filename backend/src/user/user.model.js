const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
