'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('How is your day going? Congratulations on your Node Hello World Application built on Docker!!!!');
  res.send('This image is from Docker and edited in Github');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
