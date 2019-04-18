import mongoose from 'mongoose'
import { StyleSchema } from '../schema'

const Stylist = mongoose.model('stylist', StyleSchema)
export default Stylist