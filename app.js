//base file for express etc., use routes.js to handle all the routes
//routes also needs to require express!

const express = require("express");
const app = express()

const bodyParser = require("body-parser");
const mainRouter = ('./routes/routes');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static("./"));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', mainRouter);

app.listen(3000, function () {
  console.log('Started node application!')
})
