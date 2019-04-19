import mongoose from 'mongoose';
import logger from '../util/logger';
import User from './models/User';

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    logger.debug('Mongoose has connected to MongoDB!');
});

mongoose.connection.on('error', (error) => {
    logger.warn(`
    MongoDB connection error!!!
    ${ error }
  `);
    process.exit(-1);
});


const Jean = new User({
    username: 'Tim2Cunning',
    firstName: 'Timothy',
    lastName: 'Livingston',
    Userinstagram: 'jeanlikedenim',
    twitter: 'jeanlikedenim',
    location: 'Atlanta, Georgia',
    photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
    description: 'Fashion is my escape from reality',
    motto: 'Fashion is how you feel, not how much you spent!',
    influencers: [{
        name: 'Homer Simpson',
        instagram: 'HomerDrinksBeer',
        location: 'Springfield',
        photoUrl: 'https://i.imgur.com/G80lKgk.jpg',
        style: [{
            img1: 'https://i.imgur.com/FLlQd7J.png',
            img2: 'https://i.imgur.com/rwZx9bm.png',

        }]
    }]
});


const Eman = new User({
    username: 'theOnly_Tiff',
    firstName: 'Tiffany',
    lastName: 'Williams',
    Userinstagram: 'TiffN',
    twitter: 'TiffN',
    location: 'Decatur, Georgia',
    photoUrl: 'https://i.imgur.com/KzXEukR.jpg',
    description: 'Fashion is a way to talk to talk to the world as I walk by',
    motto: 'Onyly you can be you, so why not good doing it!',
    influencers: [{
        name: 'Rasheeda',
        instagram: 'rasheedadabosschick',
        location: 'Atlanta',
        photoURl: 'https://i.imgur.com/PmOMUd3.png',
        style: [{
            img1: 'https://i.imgur.com/NRnhMjw.jpg',
            img2: 'https://i.imgur.com/1eds4Rl.jpg'
        }]
    }]
});

const Ozzie = new User({
    username: 'CapitalGB',
    firstName: 'George',
    lastName: 'Brown',
    Userinstagram: 'JuJuKnowsBest',
    twitter: 'JuJuKnowsBest',
    location: 'Fort Lauderdale',
    photoUrl: 'https://i.imgur.com/hcw8dAW.jpg',
    description: 'Fashion is a way to talk to talk to the world as I walk by',
    motto: 'Onyly you can be you, so why not good doing it!',
    influencers: [{
        name: 'Faolous',
        instagram: 'myfobolouslife',
        location: 'New York',
        photoURl: 'https://i.imgur.com/VTnn2JN.jpg',
        style: [{
            img1: 'https://i.imgur.com/NRnhMjw.jpg',
            img2: 'https://i.imgur.com/1eds4Rl.jpg'
        }]
    }]
});

// If you want to delete all the seeded data first use User.deleteMany({})
User.create()
    .then(() => {
        logger.debug('1st seed planted');
        return Jean.save();
    })

    .then(() => {
        logger.debug('2nd seed planted');
        return Ozzie.save();
    })
    .then(() => {
        logger.debug('3rd seed planted');
        return Eman.save();
    })
    .then(() => {
        mongoose.connection.close();

        logger.debug(`
    Seeded database Completed...

    Disconnected from MongoDB
    `);
    })


    .catch((err) => {
        logger.error(`Houston, we have a problem, ERROR SAVING SEEDED DATA. Error message: ${ err.message }`);
    });


/*
const collectionName = 'fashion_depo';

const seedData = [
    {
        username: 'Tim2Cunning',
        firstName: 'Timothy',
        lastName: 'Livingston',
        Userinstagram: 'jeanlikedenim',
        twitter: 'jeanlikedenim',
        location: 'Atlanta, Georgia',
        photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
        description: 'Fashion is my escape from reality',
        motto: 'Fashion is how you feel, not how much you spent!',
        influencers: [{
            name: 'Homer Simpson',
            instagram: 'HomerDrinksBeer',
            location: 'Springfield',
            photoUrl: 'https://i.imgur.com/G80lKgk.jpg',
            style: [{
                img1: 'https://i.imgur.com/FLlQd7J.png',
                img2: 'https://i.imgur.com/rwZx9bm.png',

            }]
        }]
    },
    {
        username: 'theOnly_Tiff',
        firstName: 'Tiffany',
        lastName: 'Williams',
        Userinstagram: 'TiffN',
        twitter: 'TiffN',
        location: 'Decatur, Georgia',
        photoUrl: 'https://i.imgur.com/KzXEukR.jpg',
        description: 'Fashion is a way to talk to talk to the world as I walk by',
        motto: 'Onyly you can be you, so why not good doing it!',
        influencers: [{
            name: 'Rasheeda',
            instagram: 'rasheedadabosschick',
            location: 'Atlanta',
            photoURl: 'https://i.imgur.com/PmOMUd3.png',
            style: [{
                img1: 'https://i.imgur.com/NRnhMjw.jpg',
                img2: 'https://i.imgur.com/1eds4Rl.jpg'
            }]
        }]
    },
    {
        username: 'CapitalGB',
        firstName: 'George',
        lastName: 'Brown',
        Userinstagram: 'JuJuKnowsBest',
        twitter: 'JuJuKnowsBest',
        location: 'Fort Lauderdale',
        photoUrl: 'https://i.imgur.com/hcw8dAW.jpg',
        description: 'Fashion is a way to talk to talk to the world as I walk by',
        motto: 'Onyly you can be you, so why not good doing it!',
        influencers: [{
            name: 'Faolous',
            instagram: 'myfobolouslife',
            location: 'New York',
            photoURl: 'https://i.imgur.com/VTnn2JN.jpg',
            style: [{
                img1: 'https://i.imgur.com/NRnhMjw.jpg',
                img2: 'https://i.imgur.com/1eds4Rl.jpg'
            }]
        }]
    }
];
database.then((db) => {
    const dBname = db.connection.db.databaseName;
    db.connection.collection(collectionName).deleteMany();
    logger.debug('deleted users from database');
    logger.debug('inserting seed data');
    db.connection.collection(collectionName).insertMany(seedData).catch((err) => {
        logger.debug(`Error inserting data ${ err.message }`);
    });
});
*/
