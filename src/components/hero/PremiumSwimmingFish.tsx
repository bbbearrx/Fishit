/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PREMIUM SWIMMING FISH — ENHANCED VISUAL DESIGN
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PURPOSE:
 * Renders a premium, stylized animated fish with neon glow, gradients,
 * 3D perspective, and smooth weighted movement. Each fish has natural
 * drift, tail oscillation, and gentle cursor attraction.
 * 
 * VISUAL FEATURES:
 * - 40-60% larger than standard fish
 * - Vibrant high-contrast colors with neon edge glow
 * - Internal gradient shading for depth
 * - Subtle 3D tilt perspective
 * - Animated tail oscillation
 * - Z-depth parallax (fish move at different speeds)
 * 
 * ACCESSIBILITY:
 * - Respects prefers-reduced-motion (minimal float only)
 * - pointer-events: none (doesn't interfere with clicks)
 * - Uses requestAnimationFrame for performance
 */

import { useEffect, useRef } from 'react';

interface PremiumSwimmingFishProps {
  size: number;
  speed: number;
  initialX: number;
  initialY: number;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  bounds: { width: number; height: number };
  cursorPos: { x: number; y: number } | null;
  isPaused: boolean;
  prefersReducedMotion: boolean;
  zDepth: number; // 0.0 to 1.0 (affects parallax and size)
  protectedZone?: { // Protected text area that fish should avoid
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;
  depthLayer: 'background' | 'mid' | 'foreground'; // Determines avoidance behavior
}

export default function PremiumSwimmingFish({
  size,
  speed,
  initialX,
  initialY,
  colors,
  bounds,
  cursorPos,
  isPaused,
  prefersReducedMotion,
  zDepth,
  protectedZone,
  depthLayer
}: PremiumSwimmingFishProps) {
  const fishRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: initialX, y: initialY });
  const velocityRef = useRef({ 
    x: (Math.random() - 0.5) * speed * 0.5, // Slower initial velocity
    y: (Math.random() - 0.5) * speed * 0.5 
  });
  const rotationRef = useRef(Math.random() * 360);
  const tailPhaseRef = useRef(Math.random() * Math.PI * 2);
  const animationFrameRef = useRef<number>();
  const facingRightRef = useRef(true);

  useEffect(() => {
    if (!fishRef.current || isPaused) return;

    const animate = () => {
      if (!fishRef.current) return;

      const pos = positionRef.current;
      const vel = velocityRef.current;
      const time = Date.now() * 0.001;

      if (prefersReducedMotion) {
        // ACCESSIBILITY: Gentle floating motion only
        const floatY = Math.sin(time + initialX * 0.01) * 2;
        const floatX = Math.cos(time * 0.5 + initialY * 0.01) * 1;
        fishRef.current.style.transform = `translate(${pos.x + floatX}px, ${pos.y + floatY}px) rotate(${rotationRef.current}deg) scale(${0.8 + zDepth * 0.4})`;
      } else {
        // PREMIUM: Full swimming animation with weighted movement
        
        // 1. Random drift (autonomous movement) - increased for more distance
        const driftX = (Math.random() - 0.5) * 0.15 * speed; // Increased from 0.05
        const driftY = (Math.random() - 0.5) * 0.15 * speed; // Increased from 0.05
        vel.x += driftX;
        vel.y += driftY;

        // 2. Gentle cursor attraction (subtle, not aggressive)
        if (cursorPos) {
          const dx = cursorPos.x - pos.x;
          const dy = cursorPos.y - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only attract if within reasonable range
          if (distance > 50 && distance < 400) {
            const attractionStrength = 0.02 * speed * (1 - zDepth * 0.3); // Increased from 0.008
            vel.x += (dx / distance) * attractionStrength;
            vel.y += (dy / distance) * attractionStrength;
          }
        }

        // 2.5. STRUCTURE: Protected Zone Avoidance (smooth steering away from text/CTA)
        if (protectedZone && depthLayer !== 'background') {
          // Calculate distance from fish center to protected zone
          const fishCenterX = pos.x + size / 2;
          const fishCenterY = pos.y + size / 2;
          
          // Find closest point on protected zone rectangle
          const closestX = Math.max(protectedZone.x, Math.min(fishCenterX, protectedZone.x + protectedZone.width));
          const closestY = Math.max(protectedZone.y, Math.min(fishCenterY, protectedZone.y + protectedZone.height));
          
          const dx = fishCenterX - closestX;
          const dy = fishCenterY - closestY;
          const distanceToZone = Math.sqrt(dx * dx + dy * dy);
          
          // Stronger avoidance parameters - increased thresholds and force
          const avoidanceThreshold = depthLayer === 'mid' ? 180 : 120; // Increased from 100/150
          const shouldAvoid = depthLayer === 'mid' ? true : Math.random() > 0.05; // 100% mid, 95% foreground
          
          if (distanceToZone < avoidanceThreshold && shouldAvoid) {
            // Calculate strong steering force (much stronger when closer)
            const proximityRatio = 1 - (distanceToZone / avoidanceThreshold);
            const avoidanceStrength = proximityRatio * proximityRatio * 0.4 * speed; // Quadratic falloff for stronger push
            
            // Steer away from zone (normalize direction)
            if (distanceToZone > 0) {
              vel.x += (dx / distanceToZone) * avoidanceStrength;
              vel.y += (dy / distanceToZone) * avoidanceStrength;
            } else {
              // Fish is inside zone - EMERGENCY EJECTION with strong force
              // Push directly away from zone center
              const zoneCenterX = protectedZone.x + protectedZone.width / 2;
              const zoneCenterY = protectedZone.y + protectedZone.height / 2;
              const awayX = fishCenterX - zoneCenterX;
              const awayY = fishCenterY - zoneCenterY;
              const awayDist = Math.sqrt(awayX * awayX + awayY * awayY);
              
              if (awayDist > 0) {
                vel.x += (awayX / awayDist) * 0.8 * speed;
                vel.y += (awayY / awayDist) * 0.8 * speed;
              } else {
                // Fallback: random direction
                const angle = Math.random() * Math.PI * 2;
                vel.x += Math.cos(angle) * 0.8 * speed;
                vel.y += Math.sin(angle) * 0.8 * speed;
              }
            }
          }
        }

        // 3. Boundary steering (gentle turn away from edges)
        const margin = 50;
        
        // Bounce off left/right edges
        if (pos.x < margin) {
          vel.x = Math.abs(vel.x); // Flip to positive (move right)
          facingRightRef.current = true;
        } else if (pos.x > bounds.width - size - margin) {
          vel.x = -Math.abs(vel.x); // Flip to negative (move left)
          facingRightRef.current = false;
        }
        
        // Bounce off top/bottom edges
        if (pos.y < margin) {
          vel.y = Math.abs(vel.y) * 0.5; // Gentle bounce down
        } else if (pos.y > bounds.height - size - margin) {
          vel.y = -Math.abs(vel.y) * 0.5; // Gentle bounce up
        }

        // 4. Velocity limiting (weighted, natural feel)
        const maxSpeed = 3.0 * speed * (0.5 + zDepth * 0.5); // Increased from 1.5
        const currentSpeed = Math.sqrt(vel.x * vel.x + vel.y * vel.y);
        if (currentSpeed > maxSpeed) {
          vel.x = (vel.x / currentSpeed) * maxSpeed;
          vel.y = (vel.y / currentSpeed) * maxSpeed;
        }

        // 5. Apply velocity with easing (faster response)
        const ease = 0.35; // Increased from 0.15 for faster movement
        pos.x += vel.x * ease;
        pos.y += vel.y * ease;

        // 6. Reduced damping (fish maintain speed longer)
        vel.x *= 0.985; // Reduced from 0.96 (less friction)
        vel.y *= 0.985;

        // 7. Calculate rotation based on movement direction (smooth turn)
        if (Math.abs(vel.x) > 0.05 || Math.abs(vel.y) > 0.05) {
          const targetRotation = Math.atan2(vel.y, vel.x) * (180 / Math.PI);
          const rotationDiff = targetRotation - rotationRef.current;
          
          // Handle rotation wrap-around
          let adjustedDiff = rotationDiff;
          if (rotationDiff > 180) adjustedDiff -= 360;
          if (rotationDiff < -180) adjustedDiff += 360;
          
          rotationRef.current += adjustedDiff * 0.05; // Very smooth rotation
        }

        // 8. Calculate scale based on z-depth (parallax)
        const scale = 0.8 + (zDepth * 0.4); // 0.8 to 1.2 based on depth

        // 9. Apply transform with smooth rotation and scaling
        fishRef.current.style.transform = `
          translate3d(${pos.x}px, ${pos.y}px, 0) 
          rotate(${rotationRef.current}deg) 
          scale(${scale}) 
          scaleX(${facingRightRef.current ? 1 : -1})
        `;

        // 10. Update tail phase for oscillation
        tailPhaseRef.current += 0.1 * (currentSpeed + 0.5);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [bounds, cursorPos, isPaused, prefersReducedMotion, speed, size, initialX, initialY, zDepth, protectedZone, depthLayer]);

  // Calculate tail oscillation angle
  const tailSwing = Math.sin(tailPhaseRef.current) * 15;

  return (
    <div
      ref={fishRef}
      className="absolute top-0 left-0"
      style={{
        width: size,
        height: size,
        pointerEvents: 'none',
        willChange: 'transform',
        filter: `drop-shadow(0 0 ${8 + zDepth * 4}px ${colors.accent})`,
      }}
    >
      {/* EDITABLE: Premium Fish SVG Design */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG Gradient Definitions */}
        <defs>
          {/* Body gradient (primary to secondary) */}
          <linearGradient id={`bodyGrad-${initialX}-${initialY}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.primary} />
          </linearGradient>
          
          {/* Highlight gradient */}
          <radialGradient id={`highlight-${initialX}-${initialY}`} cx="70%" cy="30%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>

          {/* Tail gradient */}
          <linearGradient id={`tailGrad-${initialX}-${initialY}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.accent} stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Main fish body (ellipse with gradient) */}
        <ellipse
          cx="60"
          cy="30"
          rx="28"
          ry="16"
          fill={`url(#bodyGrad-${initialX}-${initialY})`}
          stroke={colors.accent}
          strokeWidth="1.5"
          opacity="0.95"
        />

        {/* Body highlight (3D effect) */}
        <ellipse
          cx="60"
          cy="30"
          rx="28"
          ry="16"
          fill={`url(#highlight-${initialX}-${initialY})`}
        />

        {/* Animated tail fin (transforms based on tailSwing) */}
        <path
          d={`M 32 30 Q ${20 + tailSwing * 0.3} ${20 - tailSwing} ${10 + tailSwing * 0.5} ${15 - tailSwing * 0.8} 
              Q ${15 + tailSwing * 0.2} ${25 - tailSwing * 0.5} ${10 + tailSwing * 0.5} 30 
              Q ${15 + tailSwing * 0.2} ${35 + tailSwing * 0.5} ${10 + tailSwing * 0.5} ${45 + tailSwing * 0.8} 
              Q ${20 + tailSwing * 0.3} ${40 + tailSwing} 32 30 Z`}
          fill={`url(#tailGrad-${initialX}-${initialY})`}
          stroke={colors.accent}
          strokeWidth="1"
          opacity="0.9"
        />

        {/* Top fin */}
        <ellipse
          cx="55"
          cy="14"
          rx="10"
          ry="6"
          fill={colors.secondary}
          opacity="0.7"
          stroke={colors.accent}
          strokeWidth="0.5"
        />

        {/* Bottom fin */}
        <ellipse
          cx="58"
          cy="46"
          rx="8"
          ry="5"
          fill={colors.secondary}
          opacity="0.6"
          stroke={colors.accent}
          strokeWidth="0.5"
        />

        {/* Eye background (white) */}
        <circle
          cx="75"
          cy="26"
          r="5"
          fill="rgba(255,255,255,0.95)"
          stroke={colors.accent}
          strokeWidth="0.5"
        />

        {/* Eye pupil (dark with highlight) */}
        <circle
          cx="76"
          cy="25"
          r="3"
          fill="rgba(20,20,40,0.9)"
        />
        
        {/* Eye highlight (sparkle) */}
        <circle
          cx="77"
          cy="24"
          r="1.5"
          fill="rgba(255,255,255,0.9)"
        />

        {/* Neon accent line along body */}
        <path
          d="M 40 20 Q 55 18 70 20"
          stroke={colors.accent}
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* Scale texture (subtle dots) */}
        <circle cx="50" cy="28" r="1.5" fill={colors.accent} opacity="0.3" />
        <circle cx="56" cy="32" r="1.5" fill={colors.accent} opacity="0.3" />
        <circle cx="62" cy="28" r="1.5" fill={colors.accent} opacity="0.3" />
        <circle cx="68" cy="32" r="1.5" fill={colors.accent} opacity="0.3" />
      </svg>
    </div>
  );
}