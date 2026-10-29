
// import { Routes, Route, Navigate } from "react-router-dom";

// import MainLayout from "./layouts/MainLayout";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Education from "./pages/Education";
// import Experience from "./pages/Experience";
// import Certifications from "./pages/Certifications";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<Home />} />

//         <Route path="about" element={<About />} />
//         <Route path="skills" element={<Skills />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="education" element={<Education />} />
//         <Route path="experience" element={<Experience />} />
//         <Route
//           path="certifications"
//           element={<Certifications />}
//         />
//         <Route path="contact" element={<Contact />} />

//         <Route path="404" element={<NotFound />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;



// new code



import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
