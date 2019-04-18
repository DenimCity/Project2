import mongoose from 'mongoose';
import { InfluencerSchema } from '../schema';

const Influencer = mongoose.model('influencer', InfluencerSchema);
export default Influencer