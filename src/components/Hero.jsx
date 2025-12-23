import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="flex flex-col justify-center items-center h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I’m <span className="text-accent">Dylan Smith</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 text-slate-400"
      >
        Web Developer & Founder of <span className="text-accent font-semibold">Smith Digitals</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-2 text-slate-500 text-sm"
      >
        Crafting modern, fast, and creative web experiences.
      </motion.p>
      
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="mt-6 flex gap-6 justify-center text-2xl"
      >
        <a
          href="https://github.com/Dylanjdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-accent transition-colors duration-300"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dylan-smith-271b32275"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-accent transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </motion.div>

      <div className="mt-8 flex gap-4">
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="px-5 py-2 glass rounded-lg hover:bg-accent hover:text-black transition">
          View Projects
        </a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="px-5 py-2 border border-accent rounded-lg hover:bg-accent hover:text-black transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
