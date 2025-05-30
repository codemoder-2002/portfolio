import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import ThreeScene from "./components/ThreeScene";
import Footer from "./components/Footer";
import { ScrollProgress } from "./components/scroll-progress";

import FluidCursor from "./components/fluid-cursor";
import ContactUs2 from "./components/ContactUs";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <FluidCursor />
      <ScrollProgress />
      <ThreeScene />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Languages />
      <ContactUs2 />
      <Footer />
    </main>
  );
}
