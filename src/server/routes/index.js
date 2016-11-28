const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  res.json({
    text: 'Hello World!'
  });
});

module.exports = router;
