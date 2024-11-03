import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

//middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status;
  const errorMessage = err.message;

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(8800, () => {
  connect();

  console.log("app started at 8800!");
});
