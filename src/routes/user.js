import {
  getUsers,
  findById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import express from "express";
const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", findById);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
