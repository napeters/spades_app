'use strict';
let Game = require('../models/game');

function create(req, res){
  let newGame = new Game(req.body);

  let suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
  let values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

  let makeDeck = function() {
    suits.forEach(function(currentSuit,index,suits) {
      values.forEach(function(currentValue,index,values) {
        let card = {
          suit: '',
          value: ''
        };
        card.suit = currentSuit;
        card.value = currentValue;
        newGame.deck.push(card);
      })
    })
  };
  let shuffleDeck = function() {
    while (newGame.shuffledDeck.length < 52) {
      let randomIndex = Math.floor(Math.random()*52)
      let randomCard = newGame.deck[randomIndex];
      if ((newGame.shuffledDeck.indexOf(randomCard)) === -1) {
        newGame.shuffledDeck.push(randomCard);
      }
    }
  };

  makeDeck();
  shuffleDeck();

  newGame.save(function(err) {
    if (err){
      res.status(401).send(err);
      console.log(err);
    } else {
      res.status(200).send({currentGame: newGame, currentDeck: newGame.shuffledDeck})
    // res.status(200).send({token: jwt.sign(newUser, secret), currentUser: newUser})
    }
  })
}

module.exports = {
  create: create
}
