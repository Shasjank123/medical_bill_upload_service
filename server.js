const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const configRoutes = require('./routes');
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
  
});

