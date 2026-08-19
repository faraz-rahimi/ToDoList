import React from "react";

const Content = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.length ? (
        <ul className="todo-list">
          {tasks.map((task) => (
            <li key={task.id} className="todo-item">
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => toggleTask(task.id)}
                  className="todo-checkbox"
                />

                <span className={`todo-text ${task.isDone ? "completed" : ""}`}>
                  {task.text}
                </span>
              </div>

              <button
                className="action-btn"
                onClick={() => deleteTask(task.id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-alert">Your List is empty</p>
      )}
    </div>
  );
};

export default Content;
