'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  calories: { type: Number }
});

const foodModel = mongoose.model('food', foodSchema); // Mongodb will add 's' to food

module.exports = foodModel;