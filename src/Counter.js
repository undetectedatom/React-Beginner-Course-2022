import { useState } from "react";

export default function Counter() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const [inputText, setText] = useState("");

  const displayText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>
        {age}
        <button onClick={increaseAge}>Increase Age</button>
      </div>

      <div>
        <input type="text" onChange={displayText} />
        {inputText}
      </div>
    </div>
  );
}
