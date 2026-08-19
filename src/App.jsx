import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { id: 1, text: "Review JavaScript codes", isDone: false },
          { id: 2, text: "Create a task list component", isDone: true },
          { id: 3, text: "Drink a glass of water", isDone: false },
        ];
  });

  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTaskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="App">
      <Header
        newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        handleKeyDown={handleKeyDown}
        addTask={addTask}
      />

      <Content tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
