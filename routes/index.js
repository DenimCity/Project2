import express from 'express'
import userRoute from './userRoutes'
const router = express.Router()


router.use('/api/users', userRoute);

export default router;