import express from 'express';
import { checkAuth, login, logout, signup, updateProfile } from '../controllers/auth.controller.js';
import {productRoute} from '../middleware/auth.middleware.js';

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


router.put("/update-profile",productRoute,updateProfile)
router.get("/check", productRoute, checkAuth);

export default router;
