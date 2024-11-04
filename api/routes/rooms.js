import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
} from "../controllers/room_controller.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getAllRooms);

export default router;
