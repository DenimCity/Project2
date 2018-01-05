require('dotenv').config()

const User = require('./models/User')
const Influencer = require('./models/Influencer')
const Style = require('./models/Style')
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI)
  
  mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })
  
  mongoose.connection.on('error', (error) => {
    console.error(`
      MongoDB connection error!!! 
      ${error}
    `)
    process.exit(-1)
  })


mongoose.Promise = global.Promise
//seed file is all just dumby date to preload you database
//how i delete the users , and make some fake one to test that my files will save to my database
User.remove ({

})
.then(()=> {
  const Jean = new User({
    firstName: 'Jean',
    lastName: 'Altidor',
    instragramUrl:'https://www.instagram.com/jeanlikedenim/',
    twitterUrl:'https://twitter.com/jeanlikedenim',
    location:'Atlanta, Georgia',
    photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
    
})


})
.then(()=>{
  const Eman = new User({
    firstName: 'Emanuella',
    lastName: 'Altidor',
    instragramUrl:'https://www.instagram.com/theonly_ea/',
    twitterUrl:'https://twitter.com/theonly_EA',
    location:'Atlanta, Georgia',
    photoUrl: 'https://imgur.com/KzXEukR',
    

})

.catch((error) => {
  console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
  console.log(error)
}).then(() => {
  mongoose.connection.close()
  console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
})