const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' })
  res.send('index controller works this is your home page')
  
})

module.exports = router
