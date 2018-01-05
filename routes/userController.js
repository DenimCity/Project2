const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')

/* GET Users listing. */
router.get('/users', function(req, res, next) {
  
  res.send('resp')
  res.render('/users/show')
})

module.exports = router
