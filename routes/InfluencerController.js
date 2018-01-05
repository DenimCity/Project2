const express = require('express')
const router = express.Router({mergeParams: true})
const Influencer = require('../db/models/Influencer')

/* GET Users listing. */
router.get('/influencers', function(req, res, next) {
  

  res.render('/influencers/show')
})

module.exports = router