require('dotenv').config();
import { config } from 'dotenv';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import express from 'express'
import { MongoClient} from 'mongodb';
import mongoose from 'mongoose'
import path from 'path'

import logger from './util/logger'
import indexController from './routes/indexController'
import styleController from './routes/styleController'
import userController from './routes/userController'
import influencerController from './routes/influencerController.js'

const app = express();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const database = client.db("sample_airbnb")
    const collection = database.collection("listingsAndReviews");
    console.log(collection)
  // perform actions on the collection object
//   console.log(collection)
  client.close();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Methods', 'OPTIONS');
    res.append('Cache-Control', 'no-store');
    next();
});

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));


// app.use(bodyParser.urlencoded({
//     extended: true
// }));


// app.use(methodOverride('_method'));

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI);


// mongoose.connection.once('open', () => {
//     console.log('Mongoose has connected to MongoDB!');
// });

// mongoose.connection.on('error', (error) => {
//     console.error(`
//     MongoDB connection error!!! 
//     ${ error }
//   `);
//     process.exit(-1);
// });
// app.get('/', (request, response) => {
//     response.redirect('/users');
// });




app.use('/', async () => {
    await db.collection('inventory').insertMany([
        {
          item: 'journal',
          qty: 25,
          tags: ['blank', 'red'],
          size: { h: 14, w: 21, uom: 'cm' }
        },
        {
          item: 'mat',
          qty: 85,
          tags: ['gray'],
          size: { h: 27.9, w: 35.5, uom: 'cm' }
        },
        {
          item: 'mousepad',
          qty: 25,
          tags: ['gel', 'blue'],
          size: { h: 19, w: 22.85, uom: 'cm' }
        }
      ]);
});
app.use('/users', userController);
app.use('/users/:userId/influencer', influencerController);
app.use('/users/:userId/influencer/:influencerId/style', styleController);

app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// app.use((err, req, res) => {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
// });

// module.exports = app;
const PORT = process.env.PORT || 1748;
app.listen(PORT, () => {
    console.log(`Server running on port: ${ PORT}`)
})
