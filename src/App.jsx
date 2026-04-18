import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import MemoryDetail from "./pages/MemoryDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/memories/:id" element={<MemoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;