import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const summary = "I'm a web developer and founder of Smith Digitals, passionate about building modern web applications that solve real problems.";
  
  const fullText = (
    <>
      <p className="mb-4 leading-relaxed">
        I specialize in front-end development with React, JavaScript (ES6+), and modern web technologies. My focus is on creating responsive, accessible, and performance-optimized applications that deliver exceptional user experiences.
      </p>
      <p className="mb-4 leading-relaxed">
        As the founder of <span className="text-accent font-semibold">Smith Digitals</span>, I help businesses establish their online presence through custom web solutions. I work with clients from initial concept to deployment, ensuring every project meets modern web standards and drives results.
      </p>
      <p className="mb-4 leading-relaxed">
        My development approach emphasizes clean code, component-based architecture, and best practices in SEO, accessibility (WCAG/ARIA), and Core Web Vitals. I'm experienced with React, Vite, Node.js, Git workflows, and modern tooling.
      </p>
      <p className="leading-relaxed">
        I'm driven by continuous learning and tackling challenging projects. Whether it's building dynamic web apps, optimizing performance, or creating design systems, I'm committed to delivering quality solutions that make an impact.
      </p>
    </>
  );

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-slate-900 text-slate-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
      
      {/* Summary or full text */}
      <motion.div layout>
        <p className="text-center mb-4">{summary}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="max-w-3xl mx-auto text-center"
            >
              {fullText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Toggle button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 border border-accent rounded hover:bg-accent/20 transition-colors"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
