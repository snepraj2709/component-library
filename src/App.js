import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Components,
  Home,
  AvatarPage,
  AlertPage,
  BadgePage,
  ButtonPage,
  CardPage,
  CodePage,
  HeadingPage,
  ImagePage,
  TextPage,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/avatar" element={<AvatarPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/heading" element={<HeadingPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/text" element={<TextPage />} />
      </Routes>
    </div>
  );
}

export default App;
