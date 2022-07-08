import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import GameContext from "./components/context/GameContext";

export default function App() {
  //agregar los Link del reactRouter
  return (
    <>
      <GameContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </GameContext>
    </>
  );
}
