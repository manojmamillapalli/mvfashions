import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import New from "./pages/New";
import CoolGadgets from "./pages/CoolGadgets";
import Geek from "./pages/Geek";
import GamerGifts from "./pages/GamerGift";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Coworkers from "./pages/Coworkers";
import Parents from "./pages/Parents";
import Dad from "./pages/Dad";
import Mom from "./pages/Mom";
import Pets from "./pages/Pets";
import Funny from "./pages/Funny";
import Office from "./pages/Office";
import Under2000 from "./pages/Under2000";
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
         <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/coworkers" element={<Coworkers />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/dad" element={<Dad />} />
        <Route path="/mom" element={<Mom />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/funny" element={<Funny />} />
        <Route path="/office" element={<Office />} />
        <Route path="/under-25" element={<Under2000 />} />
      </Routes>
    </Router>
  );
}

export default App;
