import express from "express";
import {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
} from "../controllers/userController";
import { protect } from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser);
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;
