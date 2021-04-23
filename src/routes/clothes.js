'use strict';

const express = require('express');

// pull in mongo model, instantiate
const Cloth = require('../models/clothes-schema');
const GenericCollection = require('../models/collection');
const clothes = new GenericCollection(Cloth);

// start new Express router
const router = express.Router();

// routes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getCloth);
router.post('/clothes', createCloth);
router.put('/clothes/:id', updateCloth);
router.delete('/clothes/:id', deleteCloth);

// route handlers
async function getClothes(req, res) {
  let getAllClothes = await clothes.read();
  res.status(200).json(getAllClothes);
}

async function getCloth(req, res) {
  const id = req.params.id;
  let theCloth = await clothes.read(id);
  res.status(200).json(theCloth);
}

async function createCloth(req, res) {
  let content = req.body;
  let createdCloth = await clothes.create(content);
  res.status(201).json(createdCloth);
}

async function updateCloth(req, res) {
  let content = req.body;
  let id = req.params.id;
  let updated = await clothes.update(id, content);
  res.status(200).json(updated);
}

async function deleteCloth(req, res) {
  const id = req.params.id;
  let deleted = await clothes.delete(id);
  res.status(200).json(deleted);
}

module.exports = router;
