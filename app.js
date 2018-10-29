require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');


const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);


mongoose.connection.once('open', () => {
    console.log('Mongoose has connected to MongoDB!');
});

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${ error }
  `);
    process.exit(-1);
});
app.get('/', (request, response) => {
    response.redirect('/users');
});


const indexController = require('./routes/indexController');
const styleController = require('./routes/styleController');
const userController = require('./routes/userController');
const influencerController = require('./routes/influencerController.js');

app.use('/', indexController);
app.use('/users', userController);
app.use('/users/:userId/influencer', influencerController);
app.use('/users/:userId/influencer/:influencerId/style', styleController);
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
