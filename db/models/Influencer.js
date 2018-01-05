const mongoose = require('mongoose')
const Schema = require('../schema')
const Influencer = mongoose.model('Influencer', Schema.InfluencerSchema)

module.exports = Influencer