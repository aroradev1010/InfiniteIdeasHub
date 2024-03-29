import express from "express";
import {
  getUsers,
  updateUser,
  deleteUser,
  signout,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);
router.post("/signout", signout);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);

export default router;
