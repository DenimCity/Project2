const express = require('express')
const router = express.Router({mergeParams: true})
const Style = require('../db/models/Style')

/* GET Users listing. */
router.get('/users', (req, res, next)=> {
  
  res.send('hi from the style controller')
  
})

module.exports = router