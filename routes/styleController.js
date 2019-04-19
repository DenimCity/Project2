const express = require('express');

const router = express.Router({ mergeParams: true });
const influencer = require('../db/models/Influencer');
const User = require('../db/models/User');
const Style = require('../db/models/Stylist');


/* GET Users listing. */

router.get('/', (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;
    User.findById(userId)
        .then((user) => {
            const influencer = user.influencer.id(influencerId);
            res.render('style/index', {
                userId,
                user,
                influencer
            });
        });
});

router.get('/:stlyeId', (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;
    const stlyeId = req.params.stlyeId;

    User.findById(userId)
        .then((user) => {
            const style = user.style.id(influencerId);
            const gift = style.giftstyleturn.id(stlyeId);

            res.render('stlyes/show', {
                userId,
                influencerId,
                style,

            });
        })
        .catch((error) => {
            console.log(error);
        });
});


router.get('/new', (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;

    User.findById(userId)
        .then((user) => {
            const stlye = user.stlyes.id(influencerId);
            res.render('style/new', {
                userId,
                influencerId,
            });
        });
});

router.post('/', (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;
    const stlye = req.body;

    User.findById(userId)
        .then((user) => {
            const style = user.style.id(influencerId);
            style.giftstyleturn.push(stlye);
            return user.save();
        })
        .then(() => {
            res.redirect(`/users/${ userId }/style/${ influencerId }`);
        });
});

module.exports = router;
