import axios from "axios";
import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [inputValue, setInputValue] = useState("");

  const api_base = "http://localhost:3001/todo";

  const getTodos = async () => {
    try {
      const response = await axios.get(`${api_base}/todos`);
      console.log(response);
      setTodos(response.data);
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={getTodos}>
            Add Todo
          </button>
        </form>
      </div>
      <div>
        <h1>My tasks today:</h1>
        {todos ? (
          todos.map((todo) => <p key={todo._id}>{todo.todoName}</p>)
        ) : (
          <h2>No tasts yet</h2>
        )}
      </div>
    </div>
  );
};

export default Todos;
