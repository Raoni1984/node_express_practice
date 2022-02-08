const express = require('express');

const router = express.Router();

const speakersRouter = require('./speakers');
const feedbackRouter = require('./feedback');

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Bem-vindos' });
  });

  router.use('/speakers', speakersRouter());
  router.use('/feedback', feedbackRouter());

  return router;
};
