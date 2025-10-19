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
    <div className="fixed bottom-24 right-8 z-30 animate-float pointer-events-none">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-leaf/30 rounded-full blur-xl animate-glow-pulse" />
        
        {/* Mascot */}
        <img
          src={mascotSpirit}
          alt="Mavon Logo"
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover drop-shadow-2xl"
        />

        {/* Particle trail */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber rounded-full animate-particle-rise"
            style={{
              left: '50%',
              bottom: '20%',
              animationDelay: `${i * 0.3}s`,
              opacity: 0.6 - i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingMascot;
