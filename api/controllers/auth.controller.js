import UserModel from "./../models/user.models.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};
