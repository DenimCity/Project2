require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')



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
// Automatically redirect to the Users page on load
app.get('/', (request, response) => {
  response.redirect('/users')
})


app.use(morgan('dev'))
app.use(bodyParser.json());

const indexController = require('./routes/indexController')
app.use('/', indexController)

const userController = require('./routes/userController')
app.use('/users', userController)

const influencerController = require('./routes/influencerController.js')
app.use('/users/:userId/influencer', influencerController)

const styleController = require('./routes/styleController')
app.use('/users/:userId/influencer/:influencerId/style', styleController)





app.use(logger('dev'))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`your server - Api is running on port + ${PORT}`);
})

module.exports = app
