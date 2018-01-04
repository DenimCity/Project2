require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/style', {
  useMongoClient: true
})

const User = require('./routes/user')
const styles = require('/routes')

mongoose.Promise = global.Promise


const Jean = new User({
  firstName: 'Jean',
  lastName: 'Altidor',
  instragramUrl:'https://www.instagram.com/jeanlikedenim/',
  twitterUrl:'https://twitter.com/jeanlikedenim',
  location:'Atlanta, Georgia',
  photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
  
  
  styles: [{
    look1: 'https://imgur.com/qaOjfN9',
    look2:'https://imgur.com/Q5LuoCo',
    
  }]
})

const Eman = new User({
  firstName: 'Emanuella',
  lastName: 'Altidor',
  instragramUrl:'https://www.instagram.com/theonly_ea/',
  twitterUrl:'https://twitter.com/theonly_EA',
  location:'Atlanta, Georgia',
  photoUrl: 'https://imgur.com/KzXEukR',
  
  
  styles: [{
    look1: 'https://imgur.com/S2YWvh5',
    look2:'https://i.imgur.com/pV1R2Xv.jpg',
    
    
  }]
})

User.remove()
  .then(() => {
    return User.remove()
  })
  .then(() => {
    console.log('seeds are planted')
    return Jean.save()
  })
  .then(() => {
    console.log('seeds are planted')
    return Eman.save()
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })