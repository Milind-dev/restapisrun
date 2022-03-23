const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//routes
app.get('/', (req, res) => {
  res.send('gello');
});
app.get('/posts', (req, res) => {
  res.send('cdsz');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('database connect');
});
app.listen(process.env.PORT);
