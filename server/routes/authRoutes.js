import express from 'express';
import { signup, login, logout, verifyEmail } from '../controllers/authController.js';

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.post("/verifyemail", verifyEmail)


export default router;