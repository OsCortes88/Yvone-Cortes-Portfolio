import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Filmography from "./pages/Filmography";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Page Routing */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/filmography" element={<Filmography />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
