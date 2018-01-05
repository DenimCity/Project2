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
    require: [true, 'we need a name for this influencer']
  },
  instagramUrl: {
    type: String,
    required: [true, 'most influencers have instagrams, copy their link here']
  },

  location: {
    type: String,
    require: [true, 'what city are they from or post majority of their posts']
  },
  photoUrl: {
    type: String,
    default: 'https://i.imgur.com/Q5LuoCo.jpg'
  },

  styles: [StyleSchema]

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
    unique: [true, 'This username has already been created']
  },
  firstName: {
    type: String,
    required: [true, 'Must Have First Name']
  },
  lastName: {
    type: String,
    required: true,
  },
  instagramUrl: {
    type: String,
    required: [true],
    unique: [true, 'this twitter page is already in use']
  },
  twitterUrl: {
    type: String,
    required: [true, 'we have monthly shoutouts on twitter, so we need your twitter handle'],
    unique: [true, 'this twitter page is already in use']
  },

  location: {
    type: String,
    require: [true, 'We want to know where are users are from']

  },
  photoUrl: {
    type: String,
    default: 'http://images.clipartpanda.com/silhouettes-clipart-clip_art_silhouette_of_a_cartoon_baby_sitting_down_with_his_arms_out_0515-1002-0103-4312_SMU.jpg',
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
  InfluencerSchema,
}