import express from 'express'
import userRoute from './userRoutes'
const router = express.Router()


router.use('/users', userRoute);

export default router;