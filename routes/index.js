import express from 'express'
import userRoute from './userRoutes'
const router = express.Router()


router.get('/users', userRoute);

export {
      router
};