import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPalette,
  FaSearch,
  FaServer,
  FaNpm,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { MdAccessibilityNew, MdDevices, MdSpeed } from "react-icons/md";

const skills = [
  { name: "Semantic HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Modern CSS (Grid/Flex)", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Responsive Design", icon: <MdDevices className="text-cyan-400" /> },
  { name: "Accessibility (WCAG, ARIA)", icon: <MdAccessibilityNew className="text-green-400" /> },
  { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React & Component Patterns", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tooling (Vite)", icon: <SiVite className="text-purple-400" /> },
  { name: "Tooling (npm)", icon: <FaNpm className="text-red-500" /> },
  { name: "Design Systems & Tokens", icon: <FaPalette className="text-pink-400" /> },
  { name: "Performance & Core Web Vitals", icon: <MdSpeed className="text-indigo-400" /> },
  { name: "Git & CI Basics", icon: <FaGitAlt className="text-red-600" /> },
  { name: "SEO Essentials", icon: <FaSearch className="text-yellow-600" /> },
  { name: "API & Backend", icon: <FaServer className="text-gray-400" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-24 text-center overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">My Skills</h2>

      {/* Orbit container */}
      <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
        {/* Center hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-60">
          ⚙️
        </div>

        {/* Spinning orbit */}
        <div className="absolute inset-0 animate-spin-slow">
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * 2 * Math.PI;
            const x = 50 + 45 * Math.cos(angle);
            const y = 50 + 45 * Math.sin(angle);

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Counter-rotation wrapper */}
                <div className="animate-spin-reverse-slow group relative">
                  <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-125 cursor-pointer drop-shadow-lg hover:drop-shadow-xl">
                    {skill.icon}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-black/70 text-white text-xs rounded-lg px-2 py-1 transition-all duration-300 whitespace-nowrap pointer-events-none">
                    {skill.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
