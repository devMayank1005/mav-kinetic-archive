"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") || 
        target.classList.contains("cursor-crosshair")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null; // Disable on mobile

  return (
    <div 
      className={clsx(
        "fixed pointer-events-none z-[150] rounded-full mix-blend-difference transition-all duration-300 ease-out flex items-center justify-center font-mono text-xs font-bold text-[var(--color-background)]",
        isVisible ? "opacity-100" : "opacity-0",
        isHovering 
          ? "w-24 h-24 bg-[var(--color-primary)] -translate-x-12 -translate-y-12" 
          : "w-6 h-6 bg-white -translate-x-3 -translate-y-3"
      )}
      style={{ left: position.x, top: position.y }}
    >
      {isHovering ? "VIEW" : ""}
    </div>
  );
}
