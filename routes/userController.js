const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')


router.get('/', (request, response) => {
  User.find({})
    .then((users) => {
      response.render('users/index', {
        users,
        pageTitle: 'Banana'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})










module.exports = router
