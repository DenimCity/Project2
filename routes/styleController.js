const express = require('express')
const router = express.Router({mergeParams: true})
const Style = require('../db/models/Style')

/* GET Users listing. */
router.get('/users', function(req, res, next) {
  
  res.send('resp')
  res.render('/stylers/show')
})

module.exports = router