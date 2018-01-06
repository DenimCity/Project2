const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')

///when the user types localhost3000/user this page loads 
///using this command
router.get('/', (req, res) => {
  User.find({})
    .then((users) => {
      res.render('users/index', {
        users,
        pageTitle: 'Banana'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})
//the route to create a new  new user
router.get('/new', (req, res) => {
  response.render('users/new', { pageTitle: 'New User' })
})



// ///takign the users info and pushing int othe fiels that you required 
// router.post('/', (req, res)=>{
//   const newUser = new User ({
//     username:req.body.username,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         instagramUrl: req.body.instagramUrl,
//         twitterUrl: req.body.twitterUrl,
//         location: req.body.location,
//      photoUrl: req.body.photoUrl
//   })
//   newUser.save()
//   .then(()=>{
//       console.log("Saved new user to the database")
//       res.redirect('/users')
//   })
//   .catch((err)=>{
//       console.log(err)
//   })
// })

// router.get('/:userId', (req, res) => {
//   const userId = req.params.userId
  
//   User.findById(userId)
//     .then((user) => {
//       res.render('users/show', {
//           user
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// router.get('/:userId/edit', (req,res)=>{
//     const userId = req.params.userId 
//     console.log(userId)
//     User.findById(userId)
//     .then((user)=>{
//         res.render('users/edit', {
//             user
//         })
//     })
// })


// router.put('/:userId', (req, res)=>{
//   const userId = req.params.userId
//   const updatedUserInfo = req.body

//     User.findByIdAndUpdate(userId, updatedUserInfo)
//     .then(()=>{
//         res.redirect(`/users/${userId}`)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// router.get('/:userId/delete', (req, res) => {
//   const userId = req.params.userId

//   User.findByIdAndRemove(userId)
//   .then(()=>{
//       res.redirect('/users')
//   })
//   .catch((err)=>{
//       console.log(err)
//   })
// })






  module.exports = router