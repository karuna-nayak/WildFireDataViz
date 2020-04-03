var express = require('express');
// var router = express.Router();

const app =  express();
const home = require('./routes/home');

app.use('/', home);


app.listen(3000);

