import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
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
        Web Developer crafting modern, fast, and creative experiences.
      </motion.p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-5 py-2 glass rounded-lg hover:bg-accent hover:text-black transition">
          View Projects
        </a>
        <a href="#contact" className="px-5 py-2 border border-accent rounded-lg hover:bg-accent hover:text-black transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}
