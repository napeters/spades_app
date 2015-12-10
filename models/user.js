'use strict';
let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  user_name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  games: Array,
  created_at: {type: Date, default: Date.now, required: true},
  updated_at: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('User', userSchema);
