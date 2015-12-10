'use strict';
let Game = require('../models/user');

function create(req, res){
  let newGame = new Game(req.body);

  newGame.save(function(err) {
    if (err){
      res.status(401).send(err);
    } else {
      res.status(200).send({currentUser: newGame})
    // res.status(200).send({token: jwt.sign(newUser, secret), currentUser: newUser})
    }
  })
}

module.exports = {
  create: create
}
