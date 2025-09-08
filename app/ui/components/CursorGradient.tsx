import { useRef, useState, useEffect } from "react";

interface CursorGradientProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientOpacity?: number;
  gradientColor?: string;
}

export const CursorGradient: React.FC<CursorGradientProps> = ({
  children,
  className = '',
  gradientSize = 400,
  gradientOpacity = 0.15,
  gradientColor = '59, 130, 246' // blue-500 RGB
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setLocalMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    //const handleMouseLeave = () => setIsHovered(false);
    const handleMouseLeave = () => {
      // By not setting isHovered to false, the gradient remains visible
      // at its last position when the mouse leaves the component area.
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(${gradientSize}px circle at ${localMousePosition.x}px ${localMousePosition.y}px, rgba(${gradientColor}, ${gradientOpacity}), transparent 80%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

