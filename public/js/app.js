'use strict';
angular.module('SpadesApp', [])
  .controller('SpadesController', SpadesController);

SpadesController.$inject = ['$http'];

function SpadesController($http){
  let self = this;

  self.currentPlayer = {},
  self.newPlayer = {},
  self.loggingInPlayer = {},
  self.players = [],
  self.deck = [],
  self.playerOneHand = [],
  self.playerTwoHand = [],
  self.playerThreeHand = [],
  self.playerFourHand = [],

  self.createPlayer = function() {
    $http
      .post('/user/signup', self.newPlayer)
      .then(function(response){
        self.currentPlayer = response.data.currentUser;
      });
      self.newPlayer = {};
  },

  self.loginPlayer = function() {
    $http
      .post('/user/login', self.loggingInPlayer)
      .then(function(response){
        self.currentPlayer = response.data.currentUser;
        console.log(self.currentPlayer);
      });
      self.loggingInPlayer = {};
  },

  self.makeDeck = function() {
    $http
      .post('/game')
      .then(function(response){
        self.deck = response.data.currentDeck;
      });
  },

  self.addPlayer = function() {
    self.players.push(self.currentPlayer);
  },

  self.deal = function() {

  }

}
