const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')
const bodyParser = require('body-parser')

///when the user types localhost3000/user this page loads 
///using this command
router.get('/', (req, res) => {
  User.find({})
    .then((users) => {
      res.render('users/index', {
        users,

      })
    })
    .catch((error) => {
      console.log(error)
    })
})



//the route to create a new  new user
router.get('/new', (req, res) => {
  res.render('users/new')
})

router.post('/', (req, res)=> {
  const newUser = req.body 
    console.log(`new user ${newUser}`)
    User.create(newUser)
    .then(() => {
      res.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })

  })

router.get('/:userId', (req, res) => {
  const userId = req.params.userId

  User.findById(userId)
    .then((user) => {
      res.render('users/show', {
        user
      })
    })
    .catch((err) => {
      console.log(err)
    })
})


router.put('/:userId', (req, res)=>{
  const userId = req.params.userId
  const updatedUserInfo = req.body

    User.findByIdAndUpdate(userId, updatedUserInfo)
    .then(()=>{
        res.redirect(`/users/${userId}`)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/:userId/edit', (req, res) => {
  const userId = req.params.userId
  console.log(userId)
  User.findById(userId)
    .then((user) => {
      res.render('users/edit', {
        user
      })
    })
})

router.get('/:userId/delete', (req, res) => {
  const userId = req.params.userId

  User.findByIdAndRemove(userId)
    .then(() => {
      res.redirect('/users')
    })
    .catch((err) => {
      console.log(err)
    })
})






module.exports = router