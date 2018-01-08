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
        img1: 'https://i.imgur.com/Q5LuoCo.jpg',
        img2:'https://i.imgur.com/FLlQd7J.png',
  
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
    photoUrl: '/public/images/la-la-et-the-bill-cosby-show-wre0029867895-19690101.jpg',
    description:'Fashion is a way to talk to talk to the world as I walk by',
    motto:'Onyly you can be you, so why not good doing it!',
    influencers: [{
      name:'Rasheeda',
      instagram:'rasheedadabosschick',
      location:'Atlanta',
      photoURl:'https://i.imgur.com/PmOMUd3.png',
      style: [{
        img1:'https://i.imgur.com/pV1R2Xv.jpg',
        img1:'https://i.imgur.com/ExTogSi.jpg',
      }]
    }]
})

const Ozzie = new User({
  username:'bendlikebanana',
  firstName: 'Ozzie',
  lastName: 'Cunningham',
  Userinstagram:'_bendlikebanana',
  twitter:'bendlikebanana',
  location:'Fort Lauderdale, Florida',
  photoUrl: '/public/images/la-la-et-the-bill-cosby-show-wre0029867895-19690101.jpg',
  description:'Walk with as if its your body guard ',
  motto:'Fly is the only thing that I need to be',
  influencers: [{
    name:'Fabulous',
    instagram:'myfabolouslife',
    location:'New York',
    photoURl:'https://i.imgur.com/VTnn2JN.jpg',
    style: [{
      img1:'https://i.imgur.com/1eds4Rl.jpg',
      img1:'https://i.imgur.com/NRnhMjw.jpg',
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
    .then(() => {
      return Ozzie.save()
      console.log('3rd seed are planted')
    })

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
