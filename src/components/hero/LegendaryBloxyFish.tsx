/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LEGENDARY BLOXY FISH — PREMIUM GOLDEN MYTHIC CREATURE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * A legendary golden fish with embedded "bloxy.gg" branding that swims
 * continuously as a premium cinematic easter egg. Feels like a rare mythic drop.
 * 
 * VISUAL FEATURES:
 * - Custom golden fish image with magenta accents
 * - Embedded "bloxy.gg" text in glowing purple
 * - Animated shimmer and glow effects
 * - Gold dust particle trail
 * - Micro sparkles
 * 
 * BEHAVIOR:
 * - Always visible (permanent presence)
 * - Smooth cinematic swim across full screen
 * - Bounces off edges naturally
 * - Never blocks headline or CTA
 * 
 * INTERACTION:
 * - Soft golden aura (default)
 * - Glow increases 15% on cursor proximity
 * - Shows tooltip on hover: "bloxy.gg / Roblox Marketplace / Visit"
 * - Clean minimal design matching gold theme
 * 
 * ACCESSIBILITY:
 * - Respects prefers-reduced-motion (static decorative element)
 * - Pauses when hero offscreen
 * - pointer-events: none on fish itself
 * - Separate clickable area for interaction
 * 
 * NETWORK: Links to bloxy.gg (Roblox marketplace partner)
 */

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import bloxyFishImage from 'figma:asset/9bbb1fc1d86ed600f74e7a5be1d44fbbe1fdc15c.png';

interface LegendaryBloxyFishProps {
  bounds: { width: number; height: number };
  isPaused: boolean;
  prefersReducedMotion: boolean;
  isVisible: boolean;
  protectedZone?: { x: number; y: number; width: number; height: number } | null;
}

export default function LegendaryBloxyFish({
  bounds,
  isPaused,
  prefersReducedMotion,
  isVisible,
  protectedZone
}: LegendaryBloxyFishProps) {
  const fishRef = useRef<HTMLDivElement>(null);
  const clickTargetRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -200, y: bounds.height * 0.65 }); // Start offscreen left, lower area
  const velocityRef = useRef({ x: 1.2, y: 0 }); // Increased from 0.9 for faster swim
  const rotationRef = useRef(0);
  const tailPhaseRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const shimmerPhaseRef = useRef(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [cursorNearby, setCursorNearby] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);
  const facingRightRef = useRef(true); // Track direction

  // ═══════════════════════════════════════════════════════════════════════════
  // EDITABLE: Legendary Golden Fish Appearance
  // ═══════════════════════════════════════════════════════════════════════════
  
  const size = 180; // 2x larger than standard fish (90px)
  
  const colors = {
    // Metallic gold base
    primary: '#D4AF37', // Deep metallic gold
    primaryDark: '#B8941F', // Darker gold (shadows)
    primaryLight: '#F5D068', // Lighter gold (highlights)
    
    // Bronze shadows
    shadow: '#8B6914',
    shadowDeep: '#6B5011',
    
    // Warm glow
    glow: 'rgba(255, 215, 100, 0.6)', // Amber glow
    glowBright: 'rgba(255, 223, 130, 0.8)',
    
    // Text colors
    text: '#FFF8E1', // Light gold for text
    textOutline: 'rgba(50, 30, 0, 0.8)', // Dark outline
    
    // Accents
    accent: '#FFE082', // Soft gold accent
    sparkle: 'rgba(255, 255, 255, 0.9)'
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STRUCTURE: Protected Zone Avoidance (legendary fish respect boundaries)
  // ═══════════════════════════════════════════════════════════════════════════

  const avoidProtectedZone = (pos: { x: number; y: number }, vel: { x: number; y: number }) => {
    if (!protectedZone) return;

    const fishCenterX = pos.x + size / 2;
    const fishCenterY = pos.y + size / 2;

    // Find closest point on protected zone
    const closestX = Math.max(protectedZone.x, Math.min(fishCenterX, protectedZone.x + protectedZone.width));
    const closestY = Math.max(protectedZone.y, Math.min(fishCenterY, protectedZone.y + protectedZone.height));

    const dx = fishCenterX - closestX;
    const dy = fishCenterY - closestY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Strong avoidance for legendary fish (200px threshold)
    if (distance < 200) {
      const avoidanceStrength = (1 - distance / 200) * 0.3;
      
      if (distance > 0) {
        vel.y += (dy / distance) * avoidanceStrength;
      } else {
        // Inside zone - push down/up
        vel.y += fishCenterY < bounds.height / 2 ? -0.5 : 0.5;
      }
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT: Generate sparkles periodically
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (prefersReducedMotion || !isVisible) return;

    let sparkleCount = 0;
    const maxSparkles = 5;

    const sparkleInterval = setInterval(() => {
      if (positionRef.current.x > 0 && positionRef.current.x < bounds.width && sparkleCount < maxSparkles) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: Math.random() * size,
          y: Math.random() * size * 0.6 + size * 0.2,
          opacity: 1
        };
        
        setSparkles(prev => [...prev, newSparkle]);
        sparkleCount++;

        // Auto-remove after animation completes (1s)
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
          sparkleCount--;
        }, 1000);
      }
    }, 1200);

    return () => {
      clearInterval(sparkleInterval);
      sparkleCount = 0;
    };
  }, [isVisible, prefersReducedMotion, bounds.width, size]);

  // ═══════════════════════════════════════════════════════════════════════════
  // ANIMATION: Main swimming loop
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (!fishRef.current || isPaused || !isVisible) {
      positionRef.current = { x: -200, y: bounds.height * 0.65 };
      return;
    }

    const animate = () => {
      if (!fishRef.current || !clickTargetRef.current) return;

      const pos = positionRef.current;
      const vel = velocityRef.current;

      if (prefersReducedMotion) {
        // ACCESSIBILITY: Static decorative element in bottom corner
        pos.x = bounds.width - 200;
        pos.y = bounds.height - 200;
        fishRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(0.7)`;
        clickTargetRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      } else {
        // PREMIUM: Majestic cinematic swimming from left to right
        
        // Slow, steady horizontal movement
        pos.x += vel.x;
        
        // Gentle vertical wave motion (reduced amplitude for stability)
        const baseY = bounds.height * 0.65;
        pos.y = baseY + Math.sin(pos.x * 0.008) * 40;

        // Protected zone avoidance
        avoidProtectedZone(pos, vel);

        // Smooth rotation based on vertical velocity
        const verticalVelocity = Math.cos(pos.x * 0.008) * 0.32;
        const targetRotation = verticalVelocity * 8; // Slight tilt
        rotationRef.current += (targetRotation - rotationRef.current) * 0.08;

        // Bounce off screen edges (smooth turn-around)
        const margin = 50;
        
        // Bounce off left edge
        if (pos.x < -margin) {
          vel.x = Math.abs(vel.x); // Go right
          facingRightRef.current = true;
        }
        
        // Bounce off right edge - IMPORTANT: allow fish to go all the way across
        if (pos.x > bounds.width - size + margin) {
          vel.x = -Math.abs(vel.x); // Go left
          facingRightRef.current = false;
        }
        
        // Bounce off top/bottom edges
        if (pos.y < margin) {
          vel.y = Math.abs(vel.y) * 0.3;
        } else if (pos.y > bounds.height - size - margin) {
          vel.y = -Math.abs(vel.y) * 0.3;
        }

        // Update tail phase (elegant slow swim)
        tailPhaseRef.current += 0.06;

        // Update shimmer phase (6-8 second cycle)
        shimmerPhaseRef.current += 0.008;

        // Apply transform
        fishRef.current.style.transform = `
          translate3d(${pos.x}px, ${pos.y}px, 0) 
          rotate(${rotationRef.current}deg) 
          scale(1)
          scaleX(${facingRightRef.current ? 1 : -1})
        `;

        // Update clickable area position
        clickTargetRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

        // Update tooltip position if shown
        if (showTooltip) {
          setTooltipPos({ x: pos.x, y: pos.y });
        }

        // Note: No reset needed - fish bounces at edges now
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [bounds, isPaused, prefersReducedMotion, isVisible, showTooltip, protectedZone]);

  // ═══════════════════════════════════════════════════════════════════════════
  // INTERACTION: Cursor proximity detection (throttled for performance)
  // ═══════════════════════════════════════════════════════════════════════════

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const pos = positionRef.current;
          const dx = e.clientX - (pos.x + size / 2);
          const dy = e.clientY - (pos.y + size / 2);
          const distanceSquared = dx * dx + dy * dy; // Avoid sqrt for performance
          
          setCursorNearby(distanceSquared < 22500); // 150 * 150
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion, size]);

  const handleInteraction = () => {
    setShowTooltip(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  const handleVisitClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://bloxy.gg', '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  const tailSwing = Math.sin(tailPhaseRef.current) * 18;
  const shimmerOffset = (Math.sin(shimmerPhaseRef.current) + 1) * 50; // 0-100%
  const glowIntensity = cursorNearby ? 1.15 : 1.0;

  return (
    <>
      {/* Fish Visual (pointer-events: none) */}
      <div
        ref={fishRef}
        className="absolute top-0 left-0"
        style={{
          width: size,
          height: size,
          pointerEvents: 'none',
          willChange: 'transform',
          filter: `
            drop-shadow(0 0 ${24 * glowIntensity}px ${colors.glow}) 
            drop-shadow(0 0 ${12 * glowIntensity}px ${colors.glowBright})
            drop-shadow(0 4px 8px rgba(0,0,0,0.3))
          `,
          zIndex: 2,
        }}
      >
        {/* Premium golden fish image with bloxy.gg branding */}
        <img 
          src={bloxyFishImage} 
          alt="Legendary Bloxy Fish"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
            imageRendering: 'crisp-edges'
          }}
          draggable={false}
        />

        {/* ENGAGEMENT: Micro sparkles (subtle, not glittery) */}
        {!prefersReducedMotion && sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute pointer-events-none"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: 3,
              height: 3,
              background: colors.sparkle,
              borderRadius: '50%',
              opacity: sparkle.opacity,
              boxShadow: `0 0 4px ${colors.glowBright}`,
              animation: 'sparkle-fade 1s ease-out forwards'
            }}
          />
        ))}
      </div>

      {/* ENGAGEMENT: Gold dust particle trail */}
      {!prefersReducedMotion && positionRef.current.x > 0 && positionRef.current.x < bounds.width && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: positionRef.current.x + size * 0.15,
            top: positionRef.current.y + size * 0.5,
            width: 40,
            height: 6,
            background: `linear-gradient(to left, transparent, ${colors.glow}, transparent)`,
            opacity: 0.4,
            filter: 'blur(3px)',
            zIndex: 1
          }}
        />
      )}

      {/* INTERACTION: Separate clickable area (has pointer-events) */}
      <div
        ref={clickTargetRef}
        className="absolute top-0 left-0 cursor-pointer"
        style={{
          width: size,
          height: size,
          pointerEvents: 'auto',
          zIndex: 3,
        }}
        onClick={handleInteraction}
        onMouseEnter={handleInteraction}
        onMouseLeave={() => {
          // Don't auto-hide on desktop to allow clicking tooltip
          if (window.innerWidth >= 768) return;
          setShowTooltip(false);
        }}
      >
        {/* Invisible hit area */}
      </div>

      {/* ENGAGEMENT: Premium Tooltip (gold theme) */}
      {showTooltip && (
        <div
          className="fixed z-50"
          style={{
            left: Math.min(tooltipPos.x + size + 15, bounds.width - 220),
            top: Math.max(20, Math.min(tooltipPos.y - 40, bounds.height - 160)),
          }}
        >
          <div 
            className="backdrop-blur-md rounded-xl shadow-2xl p-4 min-w-[200px] max-w-[240px] border-2"
            style={{
              background: 'linear-gradient(135deg, rgba(30,20,0,0.95) 0%, rgba(50,35,10,0.95) 100%)',
              borderColor: colors.accent,
              boxShadow: `0 8px 32px rgba(212,175,55,0.3), 0 0 20px ${colors.glow}`
            }}
          >
            {/* Close button (mobile) */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 transition-colors md:hidden"
              style={{ color: colors.accent }}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Title with golden styling */}
            <h3 
              className="font-bold text-lg mb-1"
              style={{ 
                color: colors.text,
                textShadow: `0 0 8px ${colors.glow}, 0 2px 4px rgba(0,0,0,0.5)`
              }}
            >
              bloxy.gg
            </h3>
            
            {/* Subtitle */}
            <p 
              className="text-sm mb-3"
              style={{ color: colors.accent }}
            >
              Roblox Marketplace
            </p>

            {/* Visit button with golden gradient */}
            <button
              onClick={handleVisitClick}
              className="w-full font-semibold text-sm py-2.5 px-4 rounded-lg transition-all flex items-center justify-center gap-2 border-2"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
                color: colors.shadowDeep,
                borderColor: colors.accent,
                boxShadow: `0 4px 12px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.accent} 100%)`;
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = `0 6px 16px rgba(212,175,55,0.5), inset 0 1px 0 rgba(255,255,255,0.4)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 12px rgba(212,175,55,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`;
              }}
            >
              Visit
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Inline keyframe animations */}
      <style>{`
        @keyframes sparkle-fade {
          0% {
            transform: scale(0) translateY(0);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) translateY(-8px);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.8) translateY(-16px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}