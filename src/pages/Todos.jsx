import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const api_base = "http://localhost:3001/todo";

  const addTodo = async () => {
    const response = await axios.post(`${api_base}/new`, {
      todoName: inputValue,
      completed: false,
    });
    setTodos([...todos, response.data]);
    setInputValue("");
  };

  const getTodos = async () => {
    try {
      const response = await axios.get(`${api_base}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error("Error retrieving todos:", error);
    }
  };
  const deleteTodo = async (id) => {
    await axios.delete(`${api_base}/delete/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };
  const completeTodo = async (id) => {
    await axios.get(`${api_base}/complete/${id}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo();
    }
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <div>
      <div className="container">
        <form className="w-100 h-40 d-flex justify-content-center align-items-center ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-80"
          />
          <button type="submit" onClick={handleSubmit}>
            Add Todo
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-center mb-3">My tasks today:</h1>
        <div className="container">
          {todos ? (
            todos.map((todo, key) => (
              <TodoCard
                todo={todo}
                key={key}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
              />
            ))
          ) : (
            <h2>No tasks yet</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
