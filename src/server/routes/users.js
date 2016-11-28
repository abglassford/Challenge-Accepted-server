const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex.select('*')
  .from('users')
  .then((data) => {
    res.json({data: data});
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex.select('*')
  .from('users')
  .where('id', id)
  .then((data) => {
    res.json({data: data});
  });
});

router.post('/', (req, res, next) => {
  knex('users')
  .insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .then(() => {
    res.status(200).json({message: 'success!'});
  });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('users')
  .where('id', id)
  .update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .then(() => {
    res.status(201).json({message: 'success!'});
  });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  knex('users')
  .where('id', id)
  .del()
  .then(() => {
    res.status(201).json({message: 'success!'})
  })
})

module.exports = router;
