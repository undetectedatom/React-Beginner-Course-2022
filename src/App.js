import { useState } from "react";
import "./App.css";
import "./style.css";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleTaskTextChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const addTask = () => {
    setNewTaskText("");
    if (!newTaskText.trim()) return;
    const newTask = {
      id: crypto.randomUUID(),
      text: newTaskText,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => taskId !== task.id));
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (taskId === task.id) {
          return { ...task, isComplete: !task.isComplete };
        } else return task;
      }),
    );
  };

  return (
    <div className="App">
      <input type="text" onChange={handleTaskTextChange} value={newTaskText} />
      <button onClick={addTask}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskText={task.text}
            taskId={task.id}
            isComplete={task.isComplete}
            onDelete={deleteTask}
            onToggleComplete={toggleTaskComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
