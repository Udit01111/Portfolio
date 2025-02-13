import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, ISourceOptions } from "tsparticles-engine";

export default function ParticlesHero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Prevents fullscreen override
          background: { color: "transparent" }, // Keeps the background unchanged
          particles: {
            number: { value: 60 },
            color: { value: "#FFD700" },
            links: {
              enable: true,
              distance: 120,
              color: "#FFD700",
              opacity: 0.6,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 1.5, // Slow down movement slightly for a better effect
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" }, // Ensures particles wrap around instead of disappearing
            },
            shape: { type: "circle" },
            size: { value: 2 },
            opacity: { value: 0.8 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
        } as ISourceOptions}
      />
    </div>
  );
}
