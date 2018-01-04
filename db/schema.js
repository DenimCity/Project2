import { url } from 'inspector';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//promises "then" and "catch" variables
mongoose.Promise = global.Promise;



const UserSchema = new Schema ({
firstName: String,
secondName: String,
instagramUrl: url,
twitterUrl: url,
location: String,
photoUrl: url,
})

const StylesSchema = new Scehma ({
look1: url,
look2: url,
})


const UserModel = mongoose.model("Users", UserSchema)
const styleModel = mongoose.model("Styles", StylesSchema)

module.exports = {
  User: UserModel,
  Style: styleModel
}