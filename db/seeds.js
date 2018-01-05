require('dotenv').config()

const User = require('/models/User')
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



//seed file is all just dumby date to preload you database
//how i delete the users , and make some fake one to test that my files will save to my database
User.remove ()
.then(()=> {
  console.log('users removed')
  return Jean.save()
})





  const Jean = new User({
    firstName: 'Jean',
    lastName: 'Altidor',
    instragramUrl:'https://www.instagram.com/jeanlikedenim/',
    twitterUrl:'https://twitter.com/jeanlikedenim',
    location:'Atlanta, Georgia',
    photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
    Influencer: [{
      name: 'John Lee',
      instagramUrl: 'https://www.instagram.com/johnjunglee/?hl=en',
      location:'Seattle',
      photourl:'https://www.instagram.com/p/BddgXhSH1mA/?taken-by=johnjunglee',
      Style: [{
        top: 'Fear Of God',
        topInfo:'From PacSun',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9yTjpry930Aw0k8IjsMmPNRe09oGT14qACQcMOIhhJvvcWHat',
        bottom: 'Fear Of God',
        bottomInfo: 'PacSun',
        img2:'https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=height:880,fit:scale/output=format:jpg,quality:70/compress/6n93epxbQc6QF892j6z3',
        shoe:'Vans',
        img3:'https://www.instagram.com/p/Bc0OS6jnOsd/?taken-by=johnjunglee',
        userUpload:'https://www.instagram.com/p/BcxnQHDHD0Q/?taken-by=johnjunglee',
      }]
    }]
})


  const Eman = new User({
    firstName: 'Emanuella',
    lastName: 'Altidor',
    instragramUrl:'https://www.instagram.com/theonly_ea/',
    twitterUrl:'https://twitter.com/theonly_EA',
    location:'Atlanta, Georgia',
    photoUrl: 'https://imgur.com/KzXEukR',
    Influencer: [{
      name:'',
      instagramUrl:'',
      location:'',
      photoURl:'',
      Style: [{
        top:'',
        topInfo:'',
        img1:'',
        bottom:
        bottomInfo:'',
        img2:'',
        shoe:'',
        img3:'',
        userUpload:'',
      }]
    }]
    

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