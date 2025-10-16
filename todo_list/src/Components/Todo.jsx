import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  // Update date and time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <Header dateTime={dateTime} />

      <Form
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      <TodoList
        task={task}
        handleDeleteTodo={handleDeleteTodo}
        handleClearTodoData={handleClearTodoData}
      />
    </section>
  );
};
