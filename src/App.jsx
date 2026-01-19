import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import SectionWrapper from "./components/SectionWrapper";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useParallax } from "./hooks/useParallax";

const App = () => {
  const [loading, setLoading] = useState(true);
  const offset = useParallax(0.05);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div
        className="pointer-events-none absolute -top-24 right-20 h-40 w-40 rounded-full bg-accent-cyan/30 blur-3xl"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      />
      <motion.div
        className="pointer-events-none absolute left-8 top-1/3 h-56 w-56 rounded-full bg-primary/30 blur-3xl"
        style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
      />
      <main className="relative">
        <Hero />
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="certifications">
          <Certifications />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </main>
    </div>
  );
};

export default App;
