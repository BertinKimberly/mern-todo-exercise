import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const Todo = mongoose.model("Todo", todoSchema);
