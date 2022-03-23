const express = require('express');
const router = express.Router();

const EmployeePosts = require('../models/EmployeeSchema');

router.get('/', (req, res) => {
  res.send('employee get we are on post');
});

router.post('/', (req, res) => {
  console.log(req.body);
});
module.exports = router;
