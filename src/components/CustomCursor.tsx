import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrails(prev => [...prev, newTrail].slice(-5));

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] w-2 h-2 rounded-full bg-primary/30 blur-sm"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trails.length,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out ${
          isPointer ? "scale-150" : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 w-6 h-6 rounded-full bg-accent/20 blur-md animate-glow-pulse" />
        
        {/* Core */}
        <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary shadow-glow" 
          style={{ transform: "translate(25%, 25%)" }} 
        />
      </div>
    </>
  );
};
