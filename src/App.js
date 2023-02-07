import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./counter";
import { Login } from "./login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
