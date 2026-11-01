import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function ProfileForm(props) {
  const [newUserName, setNewUserName] = useState("");
  const user = useContext(UserContext);
  const changeName = (event) => {
    setNewUserName(event.target.value);
  };
  const updateName = () => {
    user.setName(newUserName);
    setNewUserName("");
  };
  return (
    <div>
      <input type="text" onChange={changeName} value={newUserName} />
      <button onClick={updateName}>Submit</button>
    </div>
  );
}
