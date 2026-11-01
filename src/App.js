import { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route, Link } from "react-router";

export const UserContext = createContext(null);

function App() {
  const [name, setName] = useState("Username");
  return (
    <div className="App">
      <UserContext value={{ name, setName }}>
        <BrowserRouter>
          <nav>
            <Link to="/home"> Home </Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Routes>
            <Route path="/home" element={<Home name={name}></Home>} />
            <Route
              path="/profile"
              element={<Profile name={name} setName={setName}></Profile>}
            />
          </Routes>
        </BrowserRouter>
      </UserContext>
    </div>
  );
}

export default App;
