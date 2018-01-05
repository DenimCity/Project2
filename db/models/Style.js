const mongoose = require('mongoose')
const Schema = require('../schema')

const Style = mongoose.model('Style', Schema.StyleSchema)

module.exports = Style