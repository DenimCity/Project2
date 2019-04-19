import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users/new', userController.createUser);
router.get('/users/:userId', userController.getUserByID);
router.patch('/users/:userId/update', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

export default router;
