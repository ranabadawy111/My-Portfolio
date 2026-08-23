import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
