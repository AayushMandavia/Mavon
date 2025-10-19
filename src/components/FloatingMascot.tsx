import { useEffect, useState } from 'react';
import mascotSpirit from '@/assets/mavon-logo.jpg';

const FloatingMascot = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show mascot after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 right-6 z-30 animate-float pointer-events-none">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-leaf/40 rounded-full blur-md animate-glow-pulse" />

        {/* Mascot */}
        <img
          src={mascotSpirit}
          alt="Mavon Logo"
          className="relative w-10 h-10 md:w-12 md:h-12 rounded-full object-cover drop-shadow-lg"
        />

        {/* Particle trail */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber rounded-full animate-particle-rise"
            style={{
              left: '50%',
              bottom: '10%',
              animationDelay: `${i * 0.3}s`,
              opacity: 0.5 - i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingMascot;
