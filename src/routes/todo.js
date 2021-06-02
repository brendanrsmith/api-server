'use strict';

const express = require('express');

// pull in mongo model and instantiate with Todo schema
const Todo = require('../models/todo-schema');
const GenericCollection = require('../models/collection');
const todos = new GenericCollection(Todo);

// start new Express router
const router = express.Router();

// routes
router.get('/todos', gettodos);
router.get('/todos/:id', getTodo);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

// route handlers
async function gettodos(req, res) {
  let getAlltodos = await todos.read();
  res.status(200).json(getAlltodos);
}

async function getTodo(req, res) {
  const id = req.params.id;
  let theTodo = await todos.read(id);
  res.status(200).json(theTodo);
}

async function createTodo(req, res) {
  let content = req.body;
  let created = await todos.create(content);
  res.status(201).json(created);
}

async function updateTodo(req, res) {
  let id = req.params.id;
  let content = req.body;
  let updated = await todos.update(id, content);
  res.status(200).json(updated);
}

async function deleteTodo(req, res) {
  let id = req.params.id;
  let deleted = await todos.delete(id);
  res.status(200).json(deleted);
}

module.exports = router;