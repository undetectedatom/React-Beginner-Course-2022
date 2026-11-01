import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/home"> Home </Link>
        </nav>
        <Routes>
          <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
