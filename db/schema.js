import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// promises "then" and "catch" variables
mongoose.Promise = global.Promise;
const StyleSchema = new Schema({
    img1: {
        type: String
    },
    img2: {
        type: String
    }
}, {
    timestamps: {},
    usePushEach: true
});
const InfluencerSchema = new Schema({
    name: {
        type: String
    },
    instagram: {
        type: String
    },
    location: {
        type: String
    },
    photoUrl: {
        type: String
    },
    style: [StyleSchema]
}, {
    timestamps: {},
    usePushEach: true
});
const UserSchema = new Schema({
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    location: {
        type: String
    },
    photoUrl: {
        type: String,
        default: 'http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png'
    },
    description: {
        type: String
    },
    motto: {
        type: String
    },

    influencers: [InfluencerSchema]
}, {
    timestamps: {},
    usePushEach: true
});

export {
    UserSchema,
    StyleSchema,
    InfluencerSchema
};
