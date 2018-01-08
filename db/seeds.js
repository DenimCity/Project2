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

  const Jean = new User({
    username: 'jeanlikedenim',
    firstName: 'Jean',
    lastName: 'Altidor',
    Userinstagram:'jeanlikedenim',
    twitter:'jeanlikedenim',
    location:'Atlanta, Georgia',
    photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
    description:'Fashion is my escape from reality',
    motto:'Fashion is how you feel, not how much you spent!',
    influencers: [{
      name: 'Homer Simpson',
      instagram: 'HomerDrinksBeer',
      location:'Springfield',
      photoUrl:'https://i.imgur.com/G80lKgk.jpg',
      style: [{
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
    username:'theonly_EA',
    firstName: 'Emanuella',
    lastName: 'Altidor',
    Userinstagram:'theonly_ea',
    twitter:'theonly_EA',
    location:'Decatur, Georgia',
    photoUrl: 'https://i.imgur.com/KzXEukR.jpg',
    description:'Fashion is a way to talk to talk to the world as I walk by',
    motto:'Onyly you can be you, so why not good doing it!',
    influencers: [{
      name:'Rasheeda',
      instagram:'rasheedadabosschick',
      location:'Atlanta',
      photoURl:'https://www.instagram.com/p/BZrg7objGwq/?taken-by=rasheedadabosschick',
      style: [{
        top:'Polo Tee',
        topInfo:'Raulph Lauren',
        img1:'https://s7.ralphlauren.com/is/image/PoloGSI/s7-1246337_lifestyle?$rl_470_pdp$',
        bottom:'Mid Thighs',
        bottomInfo:'Banana Republic',
        img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrn-9y1B3TtCQCvgF1ZcbDFirOcr87N1vaVMrgtVUbcTGra9syQ',
        shoe:'Wedges',
        img3:'https://gloimg.trendsgal.com/TR/201308/source-img/1376075226875-P-1008521.jpg',
        userUpload:'https://www.instagram.com/p/7aS4C1C0Zl/?taken-by=theonly_ea',
      }]
    }]
})

//seed file is all just dumby date to preload you database
//how i delete the users , and make some fake one to test that my files will save to my database
User.remove()
  .then(() => {
    return User.remove()
    console.log('the seeds have been removed')
  })
  .then(() => {
    return Jean.save()
    console.log('1st seed are planted')
    
  })
  .then(() => {
    return Eman.save()
    console.log('2nd seed  planted')
    mongoose.connection.close()
    console.log(`
    Finished seeding database...
    
    Disconnected from MongoDB Connection
  `)
  })
  .catch(err => {
    console.log('!!!!! Houston, we have a problem, ERROR SAVING SEEDED DATA !!!!!')
    console.log(err)
  })
