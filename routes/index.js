import express from "express";
import { Login, Logout } from "../controllers/Users.js";
import { position } from "../controllers/Recruitment.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
 
const router = express.Router();

router.post('/recruitment', verifyToken, position);
router.post('/recruitment/:id', verifyToken, position);

router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;