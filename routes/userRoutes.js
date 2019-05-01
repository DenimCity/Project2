import express from 'express';
import {
    createUser,
    deleteUser,
    getUserByID,
    getUsers,
    updateUser
} from '../controllers/userController';

const router = express.Router();

router.get('/', getUsers)
    .post('/', createUser);
router.get('/:userId', getUserByID)
    .delete('/:userId', deleteUser)
    .patch('/:userId/', updateUser);

export default router;
