import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Discord from "./pages/discord/Discord"
import GettingStarted from "./pages/gettingStarted/GettingStarted"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="get-started" element={<Navbar />} />
          <Route path="discord" element={<Discord />} />
          <Route path="started" element={<GettingStarted />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
