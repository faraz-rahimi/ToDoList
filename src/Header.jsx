import React from "react";

const Header = ({ newTaskText, setNewTaskText, handleKeyDown, addTask }) => {
  return (
    <div>
      <h2 className="todo-header">My Task List 📝</h2>

      <div className="input-group">
        <input
          type="text"
          className="todo-input"
          placeholder="New task..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={addTask}>
          add
        </button>
      </div>
    </div>
  );
};

export default Header;
