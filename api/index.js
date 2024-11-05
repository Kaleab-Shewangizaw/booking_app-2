import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors"
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
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went Wrong";

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
