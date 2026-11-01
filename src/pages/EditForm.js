import { useState } from "react";

export default function ProfileForm(props) {
  const [newUserName, setNewUserName] = useState("");
  const changeName = (event) => {
    setNewUserName(event.target.value);
  };
  const updateName = () => {
    props.setName(newUserName);
    setNewUserName("");
  };
  return (
    <div>
      <input type="text" onChange={changeName} value={newUserName} />
      <button onClick={updateName}>Submit</button>
    </div>
  );
}
