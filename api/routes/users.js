import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  getAllUsers,
} from "../controllers/user_controller.js";

const router = express.Router();

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);

export default router;
