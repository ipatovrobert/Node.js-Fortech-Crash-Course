const express = require('express');
const Router = express.Router();
const { createInterest, getInterests } = require('../controllers/InterestController');
const { protected } = require('../middleware/Protected');

Router.route('/interest')
    .post(protected, createInterest)
    .get(protected, getInterests);

module.exports = Router;