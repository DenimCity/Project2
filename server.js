import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import logger from './util/logger';
import styleController from './routes/styleController';
import userController from './routes/userController';
import influencerController from './routes/influencerController';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1748;

app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Methods', 'OPTIONS');
    res.append('Cache-Control', 'no-store');
    next();
});


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    logger.info('Mongoose has connected to MongoDB!');
});

mongoose.connection.on('error', (error) => {
    logger.error(`
    MongoDB connection error!!! 
    ${ error }
  `);
    process.exit(-1);
});


app.use('/users', userController);
app.use('/users/:userId/influencer', influencerController);
app.use('/users/:userId/influencer/:influencerId/style', styleController);


app.listen(PORT, () => {
    logger.info(`Server running on port: ${ PORT }`);
});
