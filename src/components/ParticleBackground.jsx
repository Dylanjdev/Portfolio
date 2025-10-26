import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  useEffect(() => {
    loadFull(tsParticles);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#0f172a" }, // deep slate background
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#38bdf8" }, // cyan particles
          links: {
            color: "#38bdf8",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "out",
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
