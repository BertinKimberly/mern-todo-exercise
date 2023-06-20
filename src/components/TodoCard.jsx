import React from "react";

const TodoCard = ({ todo,deleteTodo }) => {
  return (
    <div
      className="bg-black w-100 p-2 mt-2 d-flex justify-content-between align-items-center"
   
    >
      <p className="text-white ">{todo.todoName}</p>
      <button className="border rounded-circle delete"onClick={()=>deleteTodo(todo._id)} >X</button>
    </div>
  );
};

export default TodoCard;
