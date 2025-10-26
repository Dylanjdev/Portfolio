import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/mrblnree", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-slate-900 text-slate-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        {/* Submission success message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-500 text-white p-4 rounded mb-6 text-center font-medium"
            >
              Thank you! Your message has been sent.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 glass glow p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
            className="bg-[var(--card)] text-slate-200 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue="dylanjsmith.dev@gmail.com"
            autoComplete="email"
            required
            className="bg-[var(--card)] text-slate-200 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="bg-[var(--card)] text-slate-200 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-accent text-white-900 font-semibold px-6 py-3 rounded hover:bg-accent/90 transition transform hover:scale-105"
          >
            Send <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
