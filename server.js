'use strict';
const express = require('express');
const logger = require('morgan');
let bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express();

const mongoose = require('mongoose');
let mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/spades';
moongoose.connect(mongoUri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Database Connection Established');
});

app.listen(process.env.PORT || 8888);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

let userRoutes = require('./routes/userRoutes');
let gameRoutes = require('./routes/gameRoutes');
app.use('/user', userRoutes);
app.use('/game', gameRoutes);
