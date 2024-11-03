import User_models from "../models/user_models.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User_models({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).send("User registered successfully!");
  } catch (err) {
    next(err);
  }
};
