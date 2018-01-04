import { url } from 'inspector';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//promises "then" and "catch" variables
mongoose.Promise = global.Promise;



const UserSchema = new Schema({
  username: {
    type: String,
    require: [true, 'We need that fashion handle'],
    unique: [true, 'This username has already been created']
  },
  firstName: {
    type: String,
    required: [true, "Must Have First Name"]
  },
  lastname: {
    type: String,
    required: [true, "Must have a Last Name"]
  },
  instagramUrl: {
    type: url,
    required: [true, 'we need you to have at least a instagram page'],
    unique: [true, 'this twitter page is already in use']
  },
  twitterUrl: {
    type: url,
    required: [true, 'we have monthly shoutouts on twitter, so we need your twitter handle'],
    unique: [true, 'this twitter page is already in use']
  },

  location: {
    type: String,
    require: [true, 'We want to know where are users are from']

  },
  photoUrl: {
    type: url,
    default: 'http://images.clipartpanda.com/silhouettes-clipart-clip_art_silhouette_of_a_cartoon_baby_sitting_down_with_his_arms_out_0515-1002-0103-4312_SMU.jpg',
  },

  influencers: [InfluencerSchema]

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
    type: url,
    required: [true, 'most influencers have instagrams, copy their link here']
  },

  location: {
    type: String,
    require: [true, 'what city are they from or post majority of their posts']
  },
  photoUrl: {
    type: url,
    default: 'https://i.imgur.com/Q5LuoCo.jpg'
  },

  styles: [StyleSChema]

},
  {
    timestamps: {},
    usePushEach: true
  }
)



const StylesSchema = new Scehma({
  top: {
    type: String,
    require: [true, 'What brand of string?']
  },
  topInfo: {
    type: String,
    required: [true, 'where did you buy the shirt?']
  },
  img1: {
    type: url,
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
    type: url,
    required: [true, 'copy the link of the image here']
  },
  shoe: {
    type: String,
    required: [true, 'whats the brand of the shoe?']
  },

  img3: {
    type: url,
    required: [true, 'upload a picture of the shoe']
  },

  userUpload: {
    type: url,
    required: [true]
  }
}, 

{
  timestamps: {},
  usePushEach: true
}
)




const UserModel = mongoose.model("Users", UserSchema)
const styleModel = mongoose.model("Styles", StylesSchema)

module.exports = {
  User: UserSchema,
  Style: StyleSChema,
  Influencer: InfluencerSchema,
}