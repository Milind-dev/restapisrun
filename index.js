const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//use middleware
const employeePostRoute = require('./routes/employee');
app.use('/api/employee/', employeePostRoute);

//routes
app.get('/', (req, res) => {
  res.send('gello');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('database connect');
});
app.listen(process.env.PORT);
