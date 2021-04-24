'use strict';

const express = require('express');

// pull in mongo model and instantiate with food schema
const Food = require('../models/food-schema');
const GenericCollection = require('../models/collection');
const foods = new GenericCollection(Food);

// start new Express router
const router = express.Router();

// routes
router.get('/foods', getFoods);
router.get('/foods/:id', getFood);
router.post('/foods', createFood);
router.put('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

// route handlers
async function getFoods(req, res) {
  let getAllFoods = await foods.read();
  res.status(200).json(getAllFoods);
}

async function getFood(req, res) {
  const id = req.params.id;
  let theFood = await foods.read(id);
  res.status(200).json(theFood);
}

async function createFood(req, res) {
  let content = req.body;
  let created = await foods.create(content);
  res.status(201).json(created);
}

async function updateFood(req, res) {
  let id = req.params.id;
  let content = req.body;
  let updated = await foods.update(id, content);
  res.status(200).json(updated);
}

async function deleteFood(req, res) {
  let id = req.params.id;
  let deleted = await foods.delete(id);
  res.status(200).json(deleted);
}

module.exports = router;