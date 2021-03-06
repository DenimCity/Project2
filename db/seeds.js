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
    username: 'Tim2Cunning',
    firstName: 'Timothy',
    lastName: 'Livingston',
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
        img1:'https://i.imgur.com/FLlQd7J.png',
        img2:'https://i.imgur.com/rwZx9bm.png',

      }]
    }]
})


  const Eman = new User({
    username:'theOnly_Tiff',
    firstName: 'Tiffany',
    lastName: 'Williams',
    Userinstagram:'TiffN',
    twitter:'TiffN',
    location:'Decatur, Georgia',
    photoUrl: 'https://i.imgur.com/KzXEukR.jpg',
    description:'Fashion is a way to talk to talk to the world as I walk by',
    motto:'Onyly you can be you, so why not good doing it!',
    influencers: [{
      name:'Rasheeda',
      instagram:'rasheedadabosschick',
      location:'Atlanta',
      photoURl:'https://i.imgur.com/PmOMUd3.png',
      style: [{
        img1:"https://i.imgur.com/NRnhMjw.jpg",
        img2:'https://i.imgur.com/1eds4Rl.jpg'
      }]
    }]
})

const Ozzie = new User({
  username:'CapitalGB',
  firstName: 'George',
  lastName: 'Brown',
  Userinstagram:'JuJuKnowsBest',
  twitter:'JuJuKnowsBest',
  location:'Fort Lauderdale',
  photoUrl: 'https://i.imgur.com/hcw8dAW.jpg',
  description:'Fashion is a way to talk to talk to the world as I walk by',
  motto:'Onyly you can be you, so why not good doing it!',
  influencers: [{
    name:'Faolous',
    instagram:'myfobolouslife',
    location:'New York',
    photoURl:'https://i.imgur.com/VTnn2JN.jpg',
    style: [{
      img1:"https://i.imgur.com/NRnhMjw.jpg",
      img2:'https://i.imgur.com/1eds4Rl.jpg'
    }]
  }]
})

//seed file is all just dumby date to preload you database
//how i delete the users , and make some fake one to test that my files will save to my database
User.remove({})
  .then(() => {
    console.log('1st seed are planted')
    return Jean.save()
  })

  .then(() => {
    console.log('1st seed are planted')
    return Ozzie.save()
  })
  .then(() => {
    console.log('2nd seed  planted')
    return Eman.save()
  })
.then(() => {
    mongoose.connection.close()
    
    console.log(`
    Finished seeding database...
    
    Disconnected from MongoDB
    `)
})
   
 
  .catch(err => {
    console.log('!!!!! Houston, we have a problem, ERROR SAVING SEEDED DATA !!!!!')
    console.log(err)
  })
