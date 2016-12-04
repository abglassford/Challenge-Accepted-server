const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const {getOne, getAll, del, postChallenge, updateChallenge, getAllChallenges} = require('../queries/queries');

router.get('/', (req, res, next) => {
  getAll('challenges')
  .then((data) => {
    res.json({data: data});
  });
});

router.get('/allchallenges/:id', (req, res, next) => {
  getAllChallenges(req.params.id)
  .then(data => {
    console.log(data);
    res.status(200).json({
      data: data,
      message: 'success!'
    })
  })
  .catch((err) => {
    console.log(err);
    res.status(404).json({
      err: err
    })
  })
})

router.get('/userChallenge/:id', (req, res, next) => {
  knex.select('*')
  .from('challenges')
  .join('challenge_templates', 'challenge_templates.id', 'challenge_id')
  .where('user_id', req.params.id)
  .then((data) => {
    res.status(200).json({
      data: data,
      message: 'got it!'
    })
  })
  .catch((err) => {
    res.status(404).json({
      err: err
    })
  })
})

router.get('/:id', (req, res, next) => {
  getOne('challenges', req.params.id, 'id')
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
  console.log(req.body);
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
