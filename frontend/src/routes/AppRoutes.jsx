
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* About Page */}
        <Route path="about" element={<About />} />

        {/* Skills Page */}
        <Route path="skills" element={<Skills />} />

        {/* Projects Page */}
        <Route path="projects" element={<Projects />} />

        {/* Education Page */}
        <Route path="education" element={<Education />} />

        {/* Experience Page */}
        <Route path="experience" element={<Experience />} />

        {/* Certifications Page */}
        <Route
          path="certifications"
          element={<Certifications />}
        />

        {/* Contact Page */}
        <Route path="contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
