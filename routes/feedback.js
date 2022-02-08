const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => response.send('Feedback Page'));
  router.post('/', (request, response) => response.send('Feedback form sent'));

  return router;
};