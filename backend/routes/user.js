import express from "express";
import { User } from "../models/user.js";
export const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const check = await User.find({ email }); // Await the User.find() call

    if (check.length > 0) {
      console.log("email already exists");
      return res.status(500).json({ message: "error: email already exists" });
    } else {
      const newUser = new User({
        userName,
        email,
        password,
      });

      await newUser.save(); // Await the newUser.save() call

      res.status(201).json({ message: "user created successfully", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const realUser = await User.findOne({ email });
  if (!realUser) {
    res.status(404).json({ message: "Error , user wasn't found" });
  }
  if (realUser.password === password) {
    res.status(200).json({ message: "Authentication successful" });
  }
});
