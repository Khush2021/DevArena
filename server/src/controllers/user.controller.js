import { UserModel } from "../models/index.js";

export const login = async (req, res, next) => {
  try {
    const { name, email } = req.body;
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
