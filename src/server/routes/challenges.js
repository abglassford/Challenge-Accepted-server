const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const {getOne, getAll, del, postChallenge, updateChallenge} = require('../queries/queries');

router.get('/', (req, res, next) => {
  getAll('challenges')
  .then((data) => {
    res.json({data: data});
  });
});

router.get('/:id', (req, res, next) => {
  getOne('challenges', req.params.id)
  .then((data) => {
    res.json({data: data});
  });
});

router.delete('/:id', (req, res, next) => {
  del('challenges', req.params.id)
  .then(() => {
    res.status(201).json({message: 'success!'});
  });
});

router.post('/', (req, res, next) => {
  postChallenge(req.body)
  .then(() => {
    res.status(200).json({message: 'success!'});
  });
});

router.put('/:id', (req, res, next) => {
  updateChallenge(req.body, req.params.id)
  .then(() => {
    res.status(201).json({message: 'success!'});
  });
});

module.exports = router;
