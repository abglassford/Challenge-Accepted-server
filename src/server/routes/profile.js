const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const { getAll, getByName } = require('../queries/queries');

router.get('/', (req, res, next) => {
  getAll('users')
  .then((data) => {
    res.json({data: data});
  })
  .catch((err) => {
    res.json({data: err});
  });
});

router.get('/:name', (req, res, next) => {
  getByName(req.params.name)
  .then((data) => {
    res.json({data: data});
  })
  .catch(err => {
    res.status(404).json({err: err});
  });
});

module.exports = router;
