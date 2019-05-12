import { User } from '../db/models';
import { logger } from '../util';


/* GET influencer listing. */
const getInfluencer = async (req, res) => {
    const userId = req.params.userId;
    User.findById(userId)
        .then((user) => {
            res.render('influencer/index', {
                user
            });
        })
        .catch((error) => {
            logger.debug(error);
        });
};


const getOneInfluencer = (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;

    User.findById(userId)
        .then((user) => {
            const influencer = user.influencer.id(influencerId);
            res.render('influencer/show', {
                userId,
                influencer,
            });
        })
        .catch((error) => {
            logger.debug(error);
        });
};

const createInfluencer = (req, res) => {
    const userId = req.params.userId;
    const newInfluencer = req.body;

    User.findById(userId)
        .then((user) => {
            user.influencers.push(newInfluencer);
            return user.save();
        })
        .then(() => {
            res.redirect(`/users/${ userId }/influencer`);
        })
        .catch((error) => {
            logger.debug(error);
        });
};
// NOW UPDATE THE EXISTING USER PROFILE
const updateInfluencer = (req, res) => {
    const userId = req.params.userId;
    const updatedInfluencerInfo = req.body;
    const influencerId = req.params.influencerId;
    logger.debug(updatedInfluencerInfo);

    User.findById(userId)
        .then((user) => {
            const originalInfluencerInfo = user.posters.id(influencerId);
            originalInfluencerInfo.title = updatedInfluencerInfo.title;
            originalInfluencerInfo.story = updatedInfluencerInfo.story;
            originalInfluencerInfo.artist = updatedInfluencerInfo.artist;
            originalInfluencerInfo.mediumType = originalInfluencerInfo.mediumType;
            originalInfluencerInfo.limitedEdition = originalInfluencerInfo.limitedEdition;
            originalInfluencerInfo.imageUrl = originalInfluencerInfo.imageUrl;
            originalInfluencerInfo.showYear = originalInfluencerInfo.showYear;
            originalInfluencerInfo.band = originalInfluencerInfo.band;
            return user.save();
        })
        .then(() => {
            res.redirect(`/users/${ userId }`);
        });
};


const deleteInfluencer = (req, res) => {
    const userId = req.params.userId;
    const influencerId = req.params.influencerId;

    User.findById(userId)
        .then((user) => {
            user.influencers.id(influencerId).remove();
            return user.save();
        })
        .then(() => {
            res.redirect(`/users/${ userId }/influencer/`);
        })
        .catch((error) => {
            logger.debug(error);
        });
};


export {
    createInfluencer,
    deleteInfluencer,
    getInfluencer,
    getOneInfluencer,
    updateInfluencer
};
