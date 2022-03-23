// mongodb + srv://respapis:<password>@cluster0.kvovi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
  res.send('gello');
});
app.get('/posts', (req, res) => {
  res.send('cdsz');
});

app.listen(3000);
