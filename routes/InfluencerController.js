const express = require('express')
const router = express.Router({mergeParams: true})
const influencer = require('../db/models/Influencer')

/* GET Users listing. */
router.get('/Influencer', (req, res, next)=> {
  
  res.send('hi from the Influencer controller')
  
})

module.exports = router