import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

/* Components */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/ui/BackgroundAnimation";

/* Pages */

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AchievementsPage from "./pages/AchievementsPage";
import EducationPage from "./pages/EducationPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [dark, setDark] = useState(false);

  /* Dark Mode Toggle */

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <BrowserRouter>
      
      <div className="relative min-h-screen overflow-x-hidden">

        {/* BACKGROUND (GLOBAL) */}
        <BackgroundAnimation />

        {/* NAVBAR */}
        <div className="relative z-10">
          <Navbar dark={dark} onToggleDark={toggleDark} />
        </div>

        {/* MAIN CONTENT */}
        <main className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <div className="relative z-10">
          <Footer />
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;