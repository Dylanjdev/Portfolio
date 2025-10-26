import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground"; // 👈 add this

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-200 overflow-hidden">
      {/* 🌌 Particle Background Layer */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      {/* 🌐 Main Content */}
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
