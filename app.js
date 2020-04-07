var express = require('express');
// var router = express.Router();

const app =  express();
// const home = require('./routes/home');
const homeRouter = require('./src/routes/homeRoutes');
app.use('/', homeRouter);

// app.use('/', home);


app.listen(3000);

