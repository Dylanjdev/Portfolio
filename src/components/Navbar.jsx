import React from "react";

export default function Navbar() {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="glass fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-accent font-bold text-lg">Dylan.dev</h1>
        <div className="flex gap-6 text-sm">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} className="hover:text-accent transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")} className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")} className="hover:text-accent transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
