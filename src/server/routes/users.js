const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const {getOne, getAll, del, postUser, updateUser} = require('../queries/queries');

router.get('/', (req, res, next) => {
  getAll('users')
  .then((data) => {
    res.json({data: data});
  })
  .catch((err) => {
    res.json({data: err});
  });
});

router.get('/:id', (req, res, next) => {
  getOne('users', req.params.id)
  .then((data) => {
    res.json({data: data});
  });
});

router.delete('/:id', (req, res, next) => {
  del('users', req.params.id)
  .then(() => {
    res.status(201).json({message: 'success!'});
  });
});

router.post('/', (req, res, next) => {
  postUser(req.body)
  .then(() => {
    res.status(200).json({message: 'success!'});
  });
});

router.put('/:id', (req, res, next) => {
  updateUser(req.body, req.params.id)
  .then(() => {
    res.status(201).json({message: 'success!'});
  });
});

module.exports = router;
