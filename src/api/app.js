const express = require('express');
const { getUser } = require('./controllers/basic');

const app = express();
const port = 3000;

app.get('/', getUser);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
