// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ 추가
import GachaDemo from "./pages/GachaDemo";

function App() {
  return (
    <Router>
      {" "}
      {/* ✅ 루트에 Router로 감싸기 */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-grow">
          <Routes>
            {/* ✅ Routes로 감싸고 Route 설정 */}
            <Route path="/" element={<GachaDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
