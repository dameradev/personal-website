const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mainRoutes = require('./routes/main');

const app = express();
const MONGODB_URI = "mongodb://localhost/personal-website";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoutes);


mongoose.connect(MONGODB_URI, {useNewUrlParser:true}).then(()=> {
  console.log('Connected!')
  app.listen(3000);
})