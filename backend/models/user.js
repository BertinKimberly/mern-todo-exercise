import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 3,
      max: 200,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", userSchema);

