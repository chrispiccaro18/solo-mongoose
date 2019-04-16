const Fweet = require('../models/Fweet');
const { Router } = require('express');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      handle,
      body
    } = req.body;
    Fweet
      .create({ handle, body })
      .then(createdFweet => res.send(createdFweet))
      .catch(next);
  });