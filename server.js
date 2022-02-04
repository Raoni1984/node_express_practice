const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  // response.sendFile(path.join(__dirname, './static/index.html'));
  response.render('pages/index', { pageTitle: 'Bem-vindos' });
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});