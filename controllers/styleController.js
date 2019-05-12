import { User } from '../db/models';
import { logger } from '../util';

const getStylists = (req, res) => {
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
};

const getStylistsById = (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;
    // const stlyeId = req.params.stlyeId;

    User.findById(userId)
        .then((user) => {
            const style = user.style.id(influencerId);
            // const gift = style.giftstyleturn.id(stlyeId);

            res.render('stlyes/show', {
                userId,
                influencerId,
                style,

            });
        })
        .catch((error) => {
            logger.debug(error);
        });
};


const getStylistByID = (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;

    User.findById(userId)
        .then((user) => {
            const stlye = user.stlyes.id(influencerId);
            logger.debug(stlye);
            res.render('style/new', {
                userId,
                influencerId,
            });
        });
};

const createStylist = (req, res) => {
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
};

export {
    createStylist,
    getStylists,
    getStylistByID,
    getStylistsById
};
