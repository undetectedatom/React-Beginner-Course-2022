import { useState } from "react";
import "./App.css";

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
    };
    setToDoList([...toDoList, newTask]);
  };
  const removeItem = (target) => {
    setToDoList(toDoList.filter((item) => target.id !== item.id));
  };
  return (
    <div className="App">
      <input type="text" onChange={updateItem} value={item} />
      <button onClick={addItemToList}>Add Task</button>
      <div>
        {toDoList.map((task) => (
          <div>
            <p key={task.key}>{task.text}</p>
            <button key={task.key} onClick={() => removeItem(task)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
