import express from "express";
import { Todo } from "../models/todoModel.js";
export const todoRouter = express.Router();

todoRouter.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
});

todoRouter.post("/new", async (req, res) => {
  try {
    const { todoName, completed } = req.body;
    const newTodo = new Todo({
      todoName,
      completed,
    });
    await newTodo.save();
    res.status(201).json({ message: "todo added successfully:", newTodo });
  } catch (error) {
    console.log(error);
  }
});
todoRouter.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { todoName, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      todoName,
      completed,
    });
    res.status(200).json({ message: "todo updated successfully", updatedTodo });
  } catch (error) {
    console.log(error);
  }
});

todoRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "todo deleted successfully:", deletedTodo });
  } catch (error) {
    console.log(error);
  }
});


