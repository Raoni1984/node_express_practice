const express = require('express');

const router = express.Router();

const speakersRouter = require('./speakers');
const feedbackRouter = require('./feedback');

module.exports = (params) => {
  router.get('/', (request, response) => {
    // if (!request.session.visitcount) {
    //   request.session.visitcount = 0;
    // }
    // request.session.visitcount += 1;

    response.render('pages/index', { pageTitle: 'Bem-vindos' });
  });

  router.use('/speakers', speakersRouter(params));
  router.use('/feedback', feedbackRouter(params));

  return router;
};
