import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import New from "./pages/New";
import CoolGadgets from "./pages/CoolGadgets";
import Geek from "./pages/Geek";
import GamerGifts from "./pages/GamerGift";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Redirect root to /new */}
        <Route path="/" element={<Navigate to="/new" replace />} />

        <Route path="/new" element={<New />} />
        <Route path="/cool-gadgets" element={<CoolGadgets />} />
        <Route path="/geek" element={<Geek />} />
        <Route path="/gamer-gifts" element={<GamerGifts />} />
      </Routes>
    </Router>
  );
}

export default App;
