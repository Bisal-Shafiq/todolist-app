import React, { useEffect, useState } from "react";

interface TodoFormProps {
  addTask: (task: string) => void;
  editingTask: string | null;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask, editingTask }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editingTask !== null) {
      setTask(editingTask); // Pre-fill the input with the task text
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (task.trim()) {
      addTask(task);
      setTask(""); // Clear input after submit
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="input-container flex flex-col items-center mb-6 gap-4 w-full">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for the Enter key
        placeholder="Enter your task here..."
        className="input-field"
      />
      <button
        onClick={handleSubmit}
        className="add-button"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TodoForm;
