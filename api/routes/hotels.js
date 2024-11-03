import express from "express";
import Hotel_models from "../models/hotel_models.js";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotel_controller.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE

router.put("/:id", updateHotel);

//DELETE

router.delete("/:id", deleteHotel);

//GET

router.get("/:id", getHotel);

router.get("/", getAllHotels);

export default router;
