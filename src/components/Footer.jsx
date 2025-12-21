import React from "react";

export default function Footer() {
  return (
    <footer className="glass py-6 mt-24 text-center text-sm text-slate-500">
      {/* Social Links */}
      <div className="flex gap-6 justify-center text-xl mb-4">
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
      </div>
      
      <p>© {new Date().getFullYear()} Dylan Smith. All rights reserved.</p>
    </footer>
  );
}
