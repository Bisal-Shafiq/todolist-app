"use client";

import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const TodoApp = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Function to add or update task
  const addTask = (task: string) => {
    if (editingTask) {
      // Update existing task
      const updatedTasks = tasks.map((t, i) =>
        i === editingIndex ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setEditingTask(null);
      setEditingIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, { text: task, completed: false }]);
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index: number) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const startEditing = (index: number) => {
    setEditingTask(tasks[index].text); // Set the task text in the input field
    setEditingIndex(index); // Store the index of the task to be updated
  };

  return (
    <div className="wrapper">
      <h1 style={{textAlign:"center"}}><b>ToDo Application</b></h1>
      <TodoForm addTask={addTask} editingTask={editingTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        startEditing={startEditing} // Pass the startEditing function to TodoList
      />
    </div>
  );
};

export default TodoApp;
