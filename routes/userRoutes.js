import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/', userController.getUsers)
    .post('/', userController.createUser);
router.get('/:userId', userController.getUserByID)
    .delete('/:userId', userController.deleteUser)
    .patch('/:userId/', userController.updateUser);

export default router;
