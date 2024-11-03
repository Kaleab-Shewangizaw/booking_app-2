import User_models from "../models/user_models.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User_models.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User_models.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted successfully!");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User_models.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User_models.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
