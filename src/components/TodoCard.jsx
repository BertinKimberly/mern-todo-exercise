import React from "react";

const TodoCard = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div
      className="bg-black w-100 p-2 mt-2 d-flex justify-content-between align-items-center"
      onClick={() => completeTodo(todo._id)}
    >
      <p className={todo.completed? "completed":"text-white "}>{todo.todoName}</p>
      <button
        className="border rounded-circle delete"
        onClick={() => deleteTodo(todo._id)}
      >
        X
      </button>
    </div>
  );
};

export default TodoCard;
