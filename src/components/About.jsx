import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const summary = "I’m a web developer transitioning from electrical work to build a better life for my fiancée and our 3-month-old baby.";
  
  const fullText = (
    <>
      <p className="mb-4 leading-relaxed">
        I started my professional journey in electrical work, where I learned discipline, problem-solving, and precision. These skills now help me approach coding projects efficiently.
      </p>
      <p className="mb-4 leading-relaxed">
        I decided to transition into web development to create a better life for my family. This journey led me to found <span className="text-accent font-semibold">Smith Digitals</span>, a web development agency dedicated to helping businesses establish their online presence with modern, responsive websites.
      </p>
      <p className="mb-4 leading-relaxed">
        At Smith Digitals, I focus on building custom solutions using React, JavaScript, and cutting-edge web technologies, delivering fast and creative experiences tailored to each client's needs.
      </p>
      <p className="leading-relaxed">
        My goal is to continue learning, tackling challenging projects, and contributing to solutions that make a difference for businesses and their customers.
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
