const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (request, response) => {
    const speakers = await speakerService.getList();

    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) =>
    response.send(`Detail page for ${request.params.shortname}`)
  );

  return router;
};
