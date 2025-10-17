import { useEffect, useState } from 'react';

const FireflyCursor = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create new particle
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <div className="w-full h-full rounded-full bg-leaf/30 blur-md" />
        <div className="absolute inset-0 w-2 h-2 m-auto rounded-full bg-amber animate-pulse" />
      </div>

      {/* Trailing particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-amber animate-fade-out"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default FireflyCursor;
