import mongoose from 'mongoose'
import { UserSchema } from '../schema'

const User = mongoose.model('user', UserSchema)
export default User