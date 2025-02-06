import express from 'express';
import {registerUser, loginUser, getUserProfile, getSellers} from '../controllers/userController.js';
import {authMiddleware} from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', authMiddleware, getUserProfile)
router.get('/sellers', getSellers)

export default router;
