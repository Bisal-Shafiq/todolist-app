import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

interface TodoListProps {
  tasks: { text: string; completed: boolean }[];
  deleteTask: (index: number) => void;
  toggleTaskCompletion: (index: number) => void;
  startEditing: (index: number) => void; // Added startEditing function prop
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  deleteTask,
  toggleTaskCompletion,
  startEditing,
}) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 && (
        <p className="no-tasks">No tasks available. Add one to get started!</p>
      )}
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task-item ${task.completed ? "completed" : ""}`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="checkbox"
            />
            <span>{task.text}</span>
          </div>
          <div className="action-buttons">
            <button
              onClick={() => deleteTask(index)}
              className="delete-button"
              title="Delete Task"
            >
              <FaTrash />
            </button>
            <button
              onClick={() => startEditing(index)} // When clicked, start editing
              className="edit-button"
              title="Edit Task"
            >
              <FaEdit />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
