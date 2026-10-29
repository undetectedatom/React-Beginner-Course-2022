import { useState } from "react";
import "./App.css";
import "./style.css";
import Task from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [item, setItem] = useState("");

  const updateItem = (event) => {
    setItem(event.target.value);
  };

  const addItemToList = () => {
    setItem("");
    if (!item.trim()) return;
    const newTask = {
      id: crypto.randomUUID(),
      text: item,
      complete: false,
    };
    setToDoList([...toDoList, newTask]);
  };

  const removeItem = (id) => {
    setToDoList(toDoList.filter((item) => id !== item.id));
  };

  const markComplete = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (id === task.id) {
          return { ...task, complete: !task.complete };
        } else return task;
      }),
    );
  };

  return (
    <div className="App">
      <input type="text" onChange={updateItem} value={item} />
      <button onClick={addItemToList}>Add Task</button>
      <div>
        {toDoList.map((task) => (
          <Task
            key={task.id}
            taskText={task.text}
            taskId={task.id}
            complete={task.complete}
            removeItem={removeItem}
            markComplete={markComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
