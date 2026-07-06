import Hero from "../components/portfolio/Hero.jsx";
import Strengths from "../components/portfolio/Strengths.jsx";
import About from "../components/portfolio/About.jsx";
import Experience from "../components/portfolio/Experience.jsx";
import Projects from "../components/portfolio/Projects.jsx";
import Skills from "../components/portfolio/Skills.jsx";
import Contact from "../components/portfolio/Contact.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strengths />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
