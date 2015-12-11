'use strict';
let mongoose = require('mongoose');

let gameSchema = new mongoose.Schema({
  deck: Array,
  shuffledDeck: Array,
  users: Array,
  created_at: {type: Date, default: Date.now, required: true},
  updated_at: {type: Date, default: Date.now, required: true},
});

let Game = mongoose.model('Game', gameSchema);
module.exports = Game;
