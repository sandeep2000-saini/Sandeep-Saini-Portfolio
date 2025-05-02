import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResumePage from "./component/ResumePage";
import SocailMedia from "./component/Socailmedia";
import AboutSection from "./component/AboutSection";
import AboutMePage from "./component/AboutMePage";
import WhatIDo from "./component/WhatIDo";
import SkillsSection from "./component/SkillsSection";
import ProjectSection from "./component/ProjectSection";
import TestimonialsSection from "./component/TestimonialsSection";
import ContactSection from "./component/ContactSection";
import FooterSection from "./component/FooterSection";
import IntroPage from "./component/IntroPage"; // Splash screen

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Show intro splash screen for 5.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showIntro) return <IntroPage />;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="bg-gradient-to-b from-black via-[#1a1a1a] to-gray-100 text-white transition-colors duration-500 w-full">
                <section id="home" className="min-h-screen w-full flex flex-col items-center py-16">
                  <HeroSection />
                  <SocailMedia />
                </section>

                <section id="about" className="min-h-screen w-full flex justify-center items-center py-16">
                  <AboutSection />
                </section>

                <section id="whatido" className="min-h-screen w-full flex justify-center items-center py-16">
                  <WhatIDo />
                </section>

                <section id="skills" className="min-h-screen w-full flex justify-center items-center py-16">
                  <SkillsSection />
                </section>

                <section id="work" className="min-h-screen w-full flex justify-center items-center py-16">
                  <ProjectSection />
                </section>

                <section id="testimonials" className="min-h-screen w-full flex justify-center items-center py-16">
                  <TestimonialsSection />
                </section>

                <section id="contact" className="min-h-screen w-full flex justify-center items-center py-16">
                  <ContactSection />
                </section>

                <footer className="bg-gray-100 text-black w-full flex justify-center items-center py-16">
                  <FooterSection />
                </footer>
              </div>

              <div className="fixed bottom-5 right-5 z-50">
                <Button
                  onClick={scrollToTop}
                  variant="contained"
                  color="primary"
                  sx={{
                    minWidth: "0",
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                    "&:hover": {
                      backgroundColor: "#115293",
                    },
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <KeyboardArrowUpIcon />
                </Button>
              </div>
            </>
          }
        />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
