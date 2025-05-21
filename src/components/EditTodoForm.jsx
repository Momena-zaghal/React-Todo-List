import React, { useState } from "react";

export const EditTodoForm = ({editTodo, todo}) => {
  if (!todo) return null;
  const [value, setValue] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, todo.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update Task?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
