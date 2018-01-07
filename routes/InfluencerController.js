const express = require('express')
const router = express.Router({mergeParams: true})
const influencer = require('../db/models/Influencer')
const User = require('../db/models/User')



/* GET influencer listing. */
router.get('/', (req, res) => {
  const userId = req.params.userId
  User.findById(userId)
    .then((user) => {
      res.render('influencer/index', {
        user
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (req, res) => {
  const userId = req.params.userId

  res.render('influencer/new', {
    userId,
    
  })
})

router.get('/:influencerId', (req, res) => {
  const userId = req.params.userId
  const influencerId = req.params.influencerId

  User.findById(userId)
    .then((user) => {
      const influencer = user.influencer.id(influencerId)
      res.render('influencer/show', {
        userId,
        influencer,
        
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.post('/', (req, res) => {
  const userId = req.params.userId
  const newInfluencer = req.body

  User.findById(userId)
    .then((user) => {
      user.influencers.push(newInfluencer)
      return user.save()
    })
    .then(() => {
      res.redirect(`/users/${userId}/influencer`)
    })
    .catch((error) => {
      console.log(error)
    })

})
// NOW UPDATE THE EXISTING USER PROFILE
router.put('/:influencerId', (req, res) => {
  const userId = req.params.userId
  const updatedInfluencerInfo = req.body
  const influencerId = req.params.influencerId
  console.log(updatedInfluencerInfo)

  User.findById(userId)
      .then((user) => {
          const originalInfluencerInfo = user.posters.id(influencerId)
          originalInfluencerInfo.title = updatedInfluencerInfo.title
          originalInfluencerInfo.story = updatedInfluencerInfo.story
          originalInfluencerInfo.artist = updatedInfluencerInfo.artist
          originalInfluencerInfo.mediumType = originalInfluencerInfo.mediumType
          originalInfluencerInfo.limitedEdition = originalInfluencerInfo.limitedEdition
          originalInfluencerInfo.imageUrl = originalInfluencerInfo.imageUrl
          originalInfluencerInfo.showYear = originalInfluencerInfo.showYear
          originalInfluencerInfo.band = originalInfluencerInfo.band
          return user.save()
      })
      .then(() => {
          res.redirect(`/users/${userId}`)
      })
})




// router.get('/:influencerId/delete', (req, res) => {
//   const userId = req.params.userId
//   const influencerId = req.params.influencerId

//   User.findById(userId)
//     .then((user) => {
//       user.influencers.id(influencerId).remove()
//       return user.save()
//     })
//     .then(() => {
//       res.redirect(`/users/${userId}/influencer/`)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })





module.exports = router