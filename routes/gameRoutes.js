'use strict';
let express = require('express');
let router = express.Router();
let game = require('../controllers/gameController')

router.route('/')
  .post(game.create)

module.exports = router;
