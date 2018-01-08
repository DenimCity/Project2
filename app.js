require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')




const app = express()
// view engine setup
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Mongo connection set-up
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)


mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})


///the controllers control the path and actions
//homePAge
const indexController = require('./routes/indexController')
app.use('/', indexController)

//users page
const userController = require('./routes/userController')
app.use('/users', userController)
//influencers page
const influencerController = require('./routes/influencerController.js')
app.use('/users/:userId/influencer', influencerController)

//style page
// const styleController = require('./routes/styleController')
// app.use('/users/:userId/influencer/:influencerId/style', styleController)

// Automatically redirect to the Users page on load
app.get('/', (request, response) => {
  response.redirect('/users')
})






// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))


app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
