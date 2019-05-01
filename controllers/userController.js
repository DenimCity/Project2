import { logger, prettyPrint } from '../util';
import { User } from '../db/models';


const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users.length) {
            throw new Error('No users found');
        }
        logger.debug(`Querying UserData: ${ prettyPrint(users) }`);
        return res.status(200).send({ users: users });
    } catch (e) {
        logger.warn(`Error retrieving users. Message: ${ e.message }`);
        return res.status(404).send({ error: e.message });
    }
};

const createUser = async (req, res) => {
    const newUser = req.body;
    try {
        const user = await User.create(newUser);
        logger.debug(`New User data received: ${ prettyPrint(newUser) }`);
        logger.debug(`User create: ${ prettyPrint(user) }`);
        res.send({ created: newUser });
    } catch (e) {
        logger.warn(`Error creating user. Message: ${ e.message }`);
        res.status(404).send({ error: e.message });
    }
};

const getUserByID = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('No user found');
        }
        logger.debug(`User Found: ${ prettyPrint(user) }`);
        return res.send({ user });
    } catch (e) {
        logger.warn(`Error finding ${ userId }. Message: ${ e.message }`);
        return res.status(404).send({ error: e.message });
    }
};

const updateUser = async (req, res) => {
    const { userId } = req.params;
    const updatedUserInfo = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserInfo);
        if (!updatedUser) {
            throw new Error(`Error updating ID: ${ userId }`);
        }
        logger.debug(`User upated: ${ prettyPrint(updatedUser) }`);
        return res.send({ updatedUser });
    } catch (e) {
        logger.warn(`Error updating ${ userId }. Message: ${ e.message }`);
        return res.status(404).send({ error: e.message });
    }
};

const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error(`Error deleting ID: ${ userId }`);
        }
        logger.debug(`User ID: ${ userId } deleted `);
        return res.send({ message: `User ${ userId } has been deleted.` });
    } catch (e) {
        logger.warn(`Error deleting ${ userId }. Message: ${ e.message }`);
        return res.status(404).send({ error: e.message });
    }
};

export {
    createUser,
    deleteUser,
    getUserByID,
    getUsers,
    updateUser
};
