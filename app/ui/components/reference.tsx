import React, { useEffect, useRef, useState } from 'react';

// Cursor Gradient Hook
const useCursorGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  return mousePosition;
};

// Cursor Gradient Component
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
          background: `radial-gradient(${gradientSize}px circle at ${localMousePosition.x}px ${localMousePosition.y}px, rgba(${gradientColor}, ${gradientOpacity}), transparent 70%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Card Component with Cursor Gradient
const GradientCard: React.FC<{ title: string; description: string; icon?: string }> = ({
  title,
  description,
  icon = "🚀"
}) => {
  return (
    <CursorGradient className="group">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all duration-300 group-hover:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium">
          Learn more
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </CursorGradient>
  );
};

// Hero Section with Cursor Gradient
const HeroSection: React.FC = () => {
  return (
    <CursorGradient 
      className="min-h-screen flex items-center justify-center"
      gradientSize={600}
      gradientOpacity={0.1}
      gradientColor="168, 85, 247" // purple-500
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Beautiful
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}Gradients
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the magic of cursor-following gradients that bring your interface to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-gray-500 transition-colors">
            View Demo
          </button>
        </div>
      </div>
    </CursorGradient>
  );
};

// Main Demo Component
const CursorGradientDemo: React.FC = () => {
  const globalMouse = useCursorGradient();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global Cursor Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${globalMouse.x}px ${globalMouse.y}px, rgba(59, 130, 246, 0.05), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Hover over the cards
              </h2>
              <p className="text-xl text-gray-400">
                Watch the magic happen as your cursor creates beautiful gradients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GradientCard
                icon="✨"
                title="Smooth Animations"
                description="Fluid cursor tracking with smooth transitions that feel natural and responsive."
              />
              <GradientCard
                icon="🎨"
                title="Customizable Colors"
                description="Choose any color, opacity, and gradient size to match your brand perfectly."
              />
              <GradientCard
                icon="⚡"
                title="Performance First"
                description="Optimized for 60fps with minimal impact on your application's performance."
              />
              <GradientCard
                icon="📱"
                title="Mobile Friendly"
                description="Gracefully handles touch devices while maintaining the desktop experience."
              />
              <GradientCard
                icon="🔧"
                title="Easy Integration"
                description="Drop-in component that works with any existing Tailwind CSS setup."
              />
              <GradientCard
                icon="🚀"
                title="TypeScript Ready"
                description="Full TypeScript support with proper type definitions out of the box."
              />
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <CursorGradient 
              className="bg-gray-900 rounded-2xl p-12 border border-gray-800"
              gradientSize={500}
              gradientOpacity={0.2}
              gradientColor="34, 197, 94" // green-500
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Large Gradient Area</h3>
                <p className="text-lg text-gray-300 mb-8">
                  This entire section responds to your cursor with a green gradient effect.
                  Move your mouse around to see the beautiful interaction.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                    <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-300">Nested Content</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-300">Also Works</p>
                  </div>
                </div>
              </div>
            </CursorGradient>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CursorGradientDemo;