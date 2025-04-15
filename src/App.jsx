import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import { ToastContainer } from "react-toastify";
import Review from "./pages/Review";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="experience" element={<Experience />} />
          <Route path="reviews" element={<Review />} />
          <Route path="projects" element={<Projects />} />
          <Route path="thoughts" element={<Thoughts />} />
          <Route path="skills" element={<Skills />} />
          <Route path="tools" element={<Tools />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
