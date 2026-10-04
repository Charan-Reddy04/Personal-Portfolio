import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] dark:bg-[#050816]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Education/>
        <Experience/>
        <Achievements/>
        <Certifications/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;