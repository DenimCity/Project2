const express = require('express')
const router = express.Router({mergeParams: true})

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' })
  res.show('I think this is a way of showing that this route works')
})

module.exports = router
