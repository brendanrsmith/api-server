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
function getClothes(req, res) {

}

function getCloth(req, res) {

}

function createCloth(req, res) {

}

function updateCloth(req, res) {

}

function deleteCloth(req, res) {

}

module.exports = router;