import React, { useEffect, useState } from 'react';

export const AnimatedBackground = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  // Floating shapes data
  const floatingShapes = [
    { 
      type: 'circle', 
      size: 'w-96 h-96', 
      position: 'top-10 left-10', 
      color: 'bg-purple-500/15',
      animation: 'animate-float-slow',
      blur: 'blur-3xl'
    },
    { 
      type: 'circle', 
      size: 'w-80 h-80', 
      position: 'bottom-20 right-20', 
      color: 'bg-cyan-500/10',
      animation: 'animate-float-medium',
      blur: 'blur-3xl'
    },
    { 
      type: 'circle', 
      size: 'w-64 h-64', 
      position: 'top-1/3 right-1/4', 
      color: 'bg-pink-500/8',
      animation: 'animate-float-fast',
      blur: 'blur-3xl'
    },
    { 
      type: 'circle', 
      size: 'w-72 h-72', 
      position: 'bottom-1/4 left-20', 
      color: 'bg-blue-500/12',
      animation: 'animate-float-slow',
      blur: 'blur-3xl'
    },
    {
      type: 'square',
      size: 'w-48 h-48',
      position: 'top-40 left-1/3',
      color: 'bg-indigo-500/10',
      animation: 'animate-float-medium rotate-45',
      blur: 'blur-2xl'
    },
    {
      type: 'square',
      size: 'w-32 h-32',
      position: 'bottom-40 right-1/3',
      color: 'bg-teal-500/8',
      animation: 'animate-float-fast -rotate-45',
      blur: 'blur-2xl'
    }
  ];

  // Grid pattern as SVG for better performance
  const gridPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(120, 119, 198, 0.1)" stroke-width="1"/>
        </pattern>
        <radialGradient id="glow">
          <stop offset="0%" stop-color="rgba(168, 85, 247, 0.15)"/>
          <stop offset="50%" stop-color="rgba(168, 85, 247, 0.08)"/>
          <stop offset="100%" stop-color="rgba(168, 85, 247, 0)"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <circle cx="${mousePosition.x}%" cy="${mousePosition.y}%" r="30%" fill="url(#glow)" opacity="0.6"/>
    </svg>
  `)}`;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Background Container */}
      <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-slate-950/95 to-cyan-900/20" />
        
        {/* Dynamic Mouse Follow Glow */}
        <div 
          className="absolute w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 15}%`,
            top: `${mousePosition.y - 15}%`,
          }}
        />
        
        {/* Floating Animated Shapes */}
        {floatingShapes.map((shape, index) => (
          <div
            key={index}
            className={`absolute ${shape.size} ${shape.position} ${shape.color} ${shape.animation} ${shape.blur} transition-all duration-1000 ${
              shape.type === 'circle' ? 'rounded-full' : 'rounded-3xl'
            } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transitionDelay: `${index * 200}ms`,
            }}
          />
        ))}
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white/5 animate-float-slow"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }}
            />
          ))}
        </div>

        {/* Enhanced Grid Pattern with Mouse Interaction */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-1000"
          style={{
            backgroundImage: `url("${gridPattern}")`,
            backgroundSize: 'cover',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)',
          }}
        />

        {/* Pulsing Orb Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96">
          <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute inset-4 bg-cyan-500/8 rounded-full blur-2xl animate-pulse-medium" />
          <div className="absolute inset-8 bg-pink-500/5 rounded-full blur-xl animate-pulse-fast" />
        </div>

        <div className="absolute bottom-1/4 right-1/4 w-96 h-96">
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-medium delay-1000" />
          <div className="absolute inset-4 bg-purple-500/8 rounded-full blur-2xl animate-pulse-slow delay-500" />
          <div className="absolute inset-8 bg-blue-500/5 rounded-full blur-xl animate-pulse-fast delay-1500" />
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-scan" />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl" />

        {/* Animated Noise Texture */}
        <div 
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)"/>
              </svg>
            `)}")`,
          }}
        />

      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.03); }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 3s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 2s ease-in-out infinite; }
        .animate-scan { animation: scan 8s linear infinite; }
      `}</style>
    </div>
  );
};