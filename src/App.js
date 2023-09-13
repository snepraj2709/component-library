import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Components, Home, AvatarPage, AlertPage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/avatar" element={<AvatarPage />} />
        <Route path="/alert" element={<AlertPage />} />
      </Routes>
    </div>
  );
}

export default App;
