import express from "express";
import { getProductById } from "../controllers/productController";
const router = express.Router();

import { authUser } from "../controllers/userController";

router.post("/login", authUser);

export default router;
