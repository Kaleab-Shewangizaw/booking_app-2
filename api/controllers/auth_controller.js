import User_models from "../models/user_models.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User_models({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User registered successfully!");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User_models.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong Passoword or username"));
    }
    const { password, isAdmin, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
};
