const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    firstname: String,
    lastname: String
  });

module.exports = mongoose.model('User', UserSchema);
