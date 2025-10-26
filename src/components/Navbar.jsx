import React from "react";

export default function Navbar() {
  return (
    <nav className="glass fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-accent font-bold text-lg">Dylan.dev</h1>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}
