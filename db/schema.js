const mongoose = require('mongoose')
const Schema = mongoose.Schema


//promises "then" and "catch" variables
mongoose.Promise = global.Promise;


const StyleSchema = new Schema({
  top: {
    type: String,
    require: [true, 'What brand of string?']
  },
  topInfo: {
    type: String,
    required: [true, 'where did you buy the shirt?']
  },
  img1: {
    type: String,
    required: [true, 'show us what it looks like, upload a picture link']
  },
  bottom: {
    type: String,
    required: [true, 'What brand are the shorts?']
  },

  bottomInfo: {
    type: String,
    require: [true, 'where did you buy the shirt?']
  },
  img2: {
    type: String,
    required: [true, 'copy the link of the image here']
  },
  shoe: {
    type: String,
    required: [true, 'whats the brand of the shoe?']
  },

  img3: {
    type: String,
    required: [true, 'upload a picture of the shoe']
  },

  userUpload: {
    type: String,
    required: [true]
  }
}, 

{
  timestamps: {},
  usePushEach: true
}
)


const InfluencerSchema = new Schema({

  name: {
    type: String,
    require: [true]
  },
  instagram: {
    type: String,
    required: [true]
  },

  location: {
    type: String,
    require: [true]
  },
  photoUrl: {
    type: String,

  },

  style: [StyleSchema]

},
  {
    timestamps: {},
    usePushEach: true
  }
)

const UserSchema = new Schema({
  username: {
    type: String,
    require: [true, 'We need that fashion handle'],
  },
  firstName: {
    type: String,
    required: [true, 'Must Have First Name']
  },
  lastName: {
    type: String,
    required: true,
  },
  Userinstagram: {
    type: String,
    required: [true],
    
  },
  twitter: {
    type: String,
    required: [true, 'we have monthly shoutouts on twitter, so we need your twitter handle'],
    
  },

  location: {
    type: String,
    

  },
  photoUrl: {
    type: String,
    default: '/public/images/la-la-et-thse-bill-cosby-show-wre0029867895-19690101.jpg',
  },
  description: {
    type: String,
    
  },

  motto: {
    type: String,
    
  },

  influencers: [InfluencerSchema]

},
  {
    timestamps: {},
    usePushEach: true
  }
)


module.exports = {
  UserSchema,
  StyleSchema,
  InfluencerSchema
}