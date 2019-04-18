import express from 'express'
import logger from '../util/logger'
const router = express.Router({ mergeParams: true })

import User from '../db/models/User'
import bodyParser from 'body-parser'


router.get('/', async (req, res) => {
  logger.debug("style here")

  try {
    // const users = await User.find({})
    // console.log(users)
    res.json({message: 'HI'})
  } catch (e) {
    logger.warn(`Error retrieving users. Message: ${ e.message }`)
  }
  // User.find({})
  //   .then((users) => {
  //     res.render('users/index', {
  //       users,

  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
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
//the route to find one individual user
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

//the route that pushes the user into the database
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

//the route that finds the one user and allows to edit
router.get('/:userId/edit', async (req, res) => {
  const userId = req.params.userId
  const user = await User.findById(userId)
  console.log(user)
    
})
//he route that allows you to find the one specific user and delete
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






export default router