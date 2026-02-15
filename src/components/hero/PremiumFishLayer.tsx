/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PREMIUM FISH LAYER — CINEMATIC OCEAN EXPERIENCE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Creates an immersive ocean environment with premium swimming fish,
 * light rays, floating particles, and deep ocean gradient background.
 * 
 * VISUAL FEATURES:
 * - Deep ocean gradient (navy → teal → abyss)
 * - Faint light rays from top
 * - Subtle floating particles
 * - 5-7 large premium fish (desktop)
 * - 3-4 large premium fish (mobile)
 * - Z-depth parallax for realistic depth
 * 
 * ACCESSIBILITY:
 * - Respects prefers-reduced-motion media query
 * - Pauses animation when hero is offscreen (IntersectionObserver)
 * - All elements have pointer-events: none
 * 
 * PERFORMANCE:
 * - Uses requestAnimationFrame (handled by individual fish)
 * - Pauses when not visible
 * - Lightweight effects (60fps target)
 */

import { useState, useEffect, useRef } from 'react';
import PremiumSwimmingFish from './PremiumSwimmingFish';
import LegendaryBloxyFish from './LegendaryBloxyFish';

export default function PremiumFishLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [protectedZone, setProtectedZone] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Premium Fish Configuration
  // ═══════════════════════════════════════════════════════════════════════════
  
  const fishConfigs = [
    // Desktop + Mobile fish (shown on all devices)
    { 
      size: 70, 
      speed: 1.8, // Increased from 1.0
      colors: { 
        primary: 'rgba(6, 182, 212, 0.9)', 
        secondary: 'rgba(34, 211, 238, 0.85)', 
        accent: 'rgba(103, 232, 249, 0.95)' 
      },
      zDepth: 0.8 // Closer to viewer
    },
    { 
      size: 60, 
      speed: 1.5, // Increased from 0.8
      colors: { 
        primary: 'rgba(14, 165, 233, 0.85)', 
        secondary: 'rgba(59, 130, 246, 0.8)', 
        accent: 'rgba(147, 197, 253, 0.9)' 
      },
      zDepth: 0.5 // Mid-depth
    },
    { 
      size: 75, 
      speed: 2.0, // Increased from 1.1
      colors: { 
        primary: 'rgba(8, 145, 178, 0.9)', 
        secondary: 'rgba(6, 182, 212, 0.85)', 
        accent: 'rgba(34, 211, 238, 0.95)' 
      },
      zDepth: 0.9 // Very close
    },
    { 
      size: 55, 
      speed: 1.6, // Increased from 0.9
      colors: { 
        primary: 'rgba(34, 211, 238, 0.8)', 
        secondary: 'rgba(103, 232, 249, 0.75)', 
        accent: 'rgba(165, 243, 252, 0.9)' 
      },
      zDepth: 0.3 // Further away
    },

    // Desktop-only fish (hidden on mobile)
    { 
      size: 65, 
      speed: 1.7, // Increased from 1.0
      colors: { 
        primary: 'rgba(14, 165, 233, 0.85)', 
        secondary: 'rgba(6, 182, 212, 0.8)', 
        accent: 'rgba(103, 232, 249, 0.9)' 
      },
      zDepth: 0.6
    },
    { 
      size: 58, 
      speed: 1.5, // Increased from 0.85
      colors: { 
        primary: 'rgba(8, 145, 178, 0.8)', 
        secondary: 'rgba(34, 211, 238, 0.75)', 
        accent: 'rgba(147, 197, 253, 0.85)' 
      },
      zDepth: 0.4
    },
    { 
      size: 68, 
      speed: 1.7, // Increased from 0.95
      colors: { 
        primary: 'rgba(6, 182, 212, 0.85)', 
        secondary: 'rgba(14, 165, 233, 0.8)', 
        accent: 'rgba(34, 211, 238, 0.9)' 
      },
      zDepth: 0.7
    },
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // ACCESSIBILITY: Check for prefers-reduced-motion
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // RESPONSIVE: Detect mobile/desktop
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // PERFORMANCE: Measure container bounds
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setBounds({ width: rect.width, height: rect.height });
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // PERFORMANCE: Pause when offscreen using IntersectionObserver
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // INTERACTION: Track cursor position for subtle fish attraction (throttled)
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setCursorPos({ 
              x: e.clientX - rect.left, 
              y: e.clientY - rect.top 
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [prefersReducedMotion]);

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Calculate Protected Zone (hero text and CTA area)
  // ═══════════════════════════════════════════════════════════════════════════
  // This zone defines where text/buttons are, so fish can avoid it

  useEffect(() => {
    const calculateProtectedZone = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Define protected zone as center area of hero
      // Covers approximately where headline, subtitle, and CTA buttons are
      const padding = isMobile ? 40 : 60; // Extra space around text on mobile
      const zoneWidth = isMobile ? containerRect.width - 80 : Math.min(900, containerRect.width * 0.7);
      const zoneHeight = isMobile ? 400 : 350;
      
      const zone = {
        x: (containerRect.width - zoneWidth) / 2,
        y: (containerRect.height - zoneHeight) / 2 - 20, // Slightly higher (text is centered-ish)
        width: zoneWidth,
        height: zoneHeight,
      };

      setProtectedZone(zone);
    };

    calculateProtectedZone();
    window.addEventListener('resize', calculateProtectedZone);
    
    return () => window.removeEventListener('resize', calculateProtectedZone);
  }, [bounds, isMobile]);

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Assign depth layers to fish
  // ═══════════════════════════════════════════════════════════════════════════
  // Layer 1 (background): ~20% - Always behind text, lower opacity
  // Layer 2 (mid): ~60% - Avoid protected zone strongly
  // Layer 3 (foreground): ~20% - Can occasionally cross

  const getDepthLayer = (index: number, total: number): 'background' | 'mid' | 'foreground' => {
    const ratio = index / total;
    if (ratio < 0.2) return 'background'; // First 20%
    if (ratio < 0.8) return 'mid'; // Middle 60%
    return 'foreground'; // Last 20%
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Generate safe spawn positions (outside protected zone)
  // ═══════════════════════════════════════════════════════════════════════════
  
  const getSafeSpawnPosition = (fishSize: number, depthLayer: 'background' | 'mid' | 'foreground'): { x: number; y: number } => {
    // Background fish can spawn anywhere
    if (depthLayer === 'background') {
      return {
        x: Math.random() * bounds.width,
        y: Math.random() * bounds.height
      };
    }

    // Mid and foreground fish must spawn outside protected zone
    let x = 0;
    let y = 0;
    let attempts = 0;
    const maxAttempts = 20;

    while (attempts < maxAttempts) {
      x = Math.random() * bounds.width;
      y = Math.random() * bounds.height;

      // Check if position is outside protected zone (with margin)
      if (protectedZone) {
        const margin = 100; // Extra space beyond protected zone
        const isOutside = 
          x + fishSize < protectedZone.x - margin ||
          x > protectedZone.x + protectedZone.width + margin ||
          y + fishSize < protectedZone.y - margin ||
          y > protectedZone.y + protectedZone.height + margin;

        if (isOutside) {
          return { x, y };
        }
      } else {
        // No protected zone yet, return any position
        return { x, y };
      }

      attempts++;
    }

    // Fallback: spawn at edge of screen (safe zones)
    const edge = Math.floor(Math.random() * 4);
    switch (edge) {
      case 0: return { x: Math.random() * bounds.width, y: 0 }; // Top
      case 1: return { x: bounds.width - fishSize, y: Math.random() * bounds.height }; // Right
      case 2: return { x: Math.random() * bounds.width, y: bounds.height - fishSize }; // Bottom
      default: return { x: 0, y: Math.random() * bounds.height }; // Left
    }
  };

  // Determine how many fish to show (fewer for premium experience)
  const fishCount = isMobile ? 4 : 7;
  const activeFish = fishConfigs.slice(0, fishCount);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {/* Deep Ocean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-cyan-900/30 to-slate-950/50 pointer-events-none"></div>

      {/* Light Rays from Top */}
      <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-transparent"
          style={{ 
            transform: 'skewX(-10deg)',
            filter: 'blur(20px)',
            animation: prefersReducedMotion ? 'none' : 'sway-ray1 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute top-0 left-1/2 w-40 h-full bg-gradient-to-b from-blue-400/8 via-blue-400/4 to-transparent"
          style={{ 
            transform: 'skewX(8deg)',
            filter: 'blur(25px)',
            animation: prefersReducedMotion ? 'none' : 'sway-ray2 10s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute top-0 left-3/4 w-28 h-full bg-gradient-to-b from-cyan-300/6 via-cyan-300/3 to-transparent"
          style={{ 
            transform: 'skewX(-15deg)',
            filter: 'blur(22px)',
            animation: prefersReducedMotion ? 'none' : 'sway-ray3 12s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${15 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                filter: 'blur(1px)',
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Premium Swimming Fish */}
      {bounds.width > 0 && bounds.height > 0 && activeFish.map((config, index) => {
        const depthLayer = getDepthLayer(index, activeFish.length);
        const layerOpacity = depthLayer === 'background' ? 0.6 : 1.0;
        
        return (
          <div 
            key={index}
            style={{ 
              opacity: layerOpacity,
              zIndex: depthLayer === 'background' ? 0 : depthLayer === 'mid' ? 1 : 2
            }}
          >
            <PremiumSwimmingFish
              size={config.size}
              speed={config.speed}
              initialX={getSafeSpawnPosition(config.size, depthLayer).x}
              initialY={getSafeSpawnPosition(config.size, depthLayer).y}
              colors={config.colors}
              bounds={bounds}
              cursorPos={cursorPos}
              isPaused={isPaused}
              prefersReducedMotion={prefersReducedMotion}
              zDepth={config.zDepth}
              protectedZone={protectedZone}
              depthLayer={depthLayer}
            />
          </div>
        );
      })}

      {/* Legendary Bloxy Fish - Always visible */}
      {bounds.width > 0 && bounds.height > 0 && (
        <LegendaryBloxyFish
          bounds={bounds}
          isPaused={isPaused}
          prefersReducedMotion={prefersReducedMotion}
          isVisible={true}
          protectedZone={protectedZone}
        />
      )}

      {/* Inline Keyframe Animations */}
      <style>{`
        @keyframes sway-ray1 {
          0%, 100% { transform: skewX(-10deg) translateX(0); }
          50% { transform: skewX(-12deg) translateX(-10px); }
        }
        
        @keyframes sway-ray2 {
          0%, 100% { transform: skewX(8deg) translateX(0); }
          50% { transform: skewX(10deg) translateX(15px); }
        }
        
        @keyframes sway-ray3 {
          0%, 100% { transform: skewX(-15deg) translateX(0); }
          50% { transform: skewX(-13deg) translateX(-8px); }
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translate(10px, -20px) scale(1.2); 
            opacity: 0.5;
          }
          50% { 
            transform: translate(-5px, -40px) scale(0.8); 
            opacity: 0.4;
          }
          75% { 
            transform: translate(15px, -60px) scale(1.1); 
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}