import express from "express";
import Hotel_models from "../models/hotel_models.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel_models(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(newHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE

router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel_models.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Hotel_models.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET

router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel_models.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel_models.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
