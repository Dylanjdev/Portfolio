import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Import your project images
import McGuiresImg from "../assets/mcguires.png";
import RoboFriendsImg from "../assets/robofriends.png";
import SmithDigitalsImg from "../assets/smithlogo.png";

const projects = [
  {
    title: "MCGUIREs lawn and gardening.",
    desc: "A responsive, user-friendly website for McGuire's Lawn & Landscaping. Emphasizes visual storytelling with full-width images, clear service descriptions, and intuitive navigation.",
    tech: ["React", "Vite"],
    github: "https://github.com/Dylanjdev/McGures-Lawn-Landscaping",
    live: "https://mcguireslawnandlandscaping.com/",
    image: McGuiresImg,
  },
  {
    title: "RoboFriends",
    desc: "Interactive React app displaying robot friends. Uses the Robohash API for unique robot images and real-time search filtering.",
    tech: ["React + Vite", "Context API", "Tachyeons"],
    github: "https://github.com/Dylanjdev/Robofriends-React-v19-Vite-",
    live: "https://dylanjdev.github.io/Robofriends-React-v19-Vite-/",
    image: RoboFriendsImg,
  },
  {
    title: "🎮 Gaming Website",
    desc: "Modern gaming website featuring dynamic video background, smooth animations, and engaging UI. Built with pure HTML, CSS, and JavaScript to showcase front-end fundamentals.",
    tech: ["HTML5", "CSS3", "JavaScript", "Video BG"],
    github: "https://github.com/Dylanjdev/Gaming-Website",
    live: "https://dylanjdev.github.io/Gaming-Website/",
    useIframe: true,
  },
  {
    title: "🌐 Smith Digitals",
    desc: "Front-end web design and SEO agency portfolio. Modern, responsive websites optimized for performance, search visibility, and user experience.",
    tech: ["React + Vite", "CSS3", "GSC"],
    github: "https://github.com/Dylanjdev/SmithDigitals",
    live: "https://www.smithdigitals.com/",
    image: SmithDigitalsImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-accent mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass glow rounded-xl p-4 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project image or iframe */}
            <div className="overflow-hidden rounded-xl mb-4">
              {p.useIframe ? (
                <iframe
                  src={p.live}
                  title={p.title}
                  className="w-full h-80 rounded-lg border-0 pointer-events-none"
                  loading="lazy"
                />
              ) : (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 break-words">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[var(--card)] px-2 py-1 rounded text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-auto text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
              >
                <FaGithub /> Code
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors duration-200"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
