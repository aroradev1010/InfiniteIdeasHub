import express from "express";
import { createComment } from "../controllers/comment.controller.js";

import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
// router.post("/signin", signin);
// router.post("/google", google);

export default router;
