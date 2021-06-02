'use strict';

const mongoose = require('mongoose');

const todo = mongoose.Schema({
  text: { type: String, required: true },
  assignee: { type: String },
  complete: { type: Boolean, default:false },
  difficulty: { type: Number, default: 1 },
});

const todoModel = mongoose.model('todos', todo); // Mongodb will add 's' to food

module.exports = todoModel;