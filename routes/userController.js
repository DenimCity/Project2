const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')

/* GET Users listing. */
router.get('/users', function(req, res, next) {
  
  res.send('from the user controller')
  
})

module.exports = router
