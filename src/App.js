import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Components, Home } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
