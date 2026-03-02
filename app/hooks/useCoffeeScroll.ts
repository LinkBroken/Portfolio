/**
 * useCoffeeScroll Hook
 *
 * Creates a signature coffee-spill scroll animation that makes content flow
 * like liquid spilling from a cup as the user scrolls down, and flowing back
 * when scrolling up.
 *
 * Features:
 * - GPU-accelerated for smooth performance
 * - Elastic, organic motion
 * - Automatically disabled on low-end devices
 * - Respects prefers-reduced-motion
 * - Smooth bidirectional animation (down and up)
 *
 * Usage:
 * const containerRef = useRef<HTMLDivElement>(null);
 * useCoffeeScroll(containerRef, { intensity: 0.5 });
 */

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface CoffeeScrollOptions {
  intensity?: number; // 0.1 to 1.0
  enabled?: boolean;
  direction?: 'vertical' | 'horizontal';
}

interface NavigatorWithDeviceMemory extends Navigator {
  deviceMemory?: number;
}

interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: '4g' | '3g' | '2g' | 'slow-2g';
  };
}

/**
 * Detects if device is low-end (limited CPU/GPU)
 */
function isLowEndDevice(): boolean {
  // Check if device has limited memory
  const navWithMemory = navigator as NavigatorWithDeviceMemory;
  if (navWithMemory.deviceMemory && navWithMemory.deviceMemory < 4) {
    return true;
  }

  // Check if user prefers reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true;
  }

  // Check connection speed
  const navWithConnection = navigator as NavigatorWithConnection;
  const connection = navWithConnection.connection;
  if (connection && connection.effectiveType === '4g') {
    return false; // 4G is good
  }
  if (connection && connection.effectiveType === '3g') {
    return true; // 3G and below shouldn't have complex animations
  }

  return false;
}

export function useCoffeeScroll(
  ref: React.RefObject<HTMLElement>,
  options: CoffeeScrollOptions = {}
) {
  const {
    intensity = 0.6,
    enabled = true,
  } = options;

  const animationRef = useRef<gsap.core.Tween | null>(null);
  const scrollVelocityRef = useRef(0);

  useEffect(() => {
    if (!enabled || !ref.current || isLowEndDevice() || typeof window === 'undefined') {
      return;
    }

    // Lazy import GSAP only when needed



    if (!gsap || !ScrollTrigger) {
      return;
    }

    // Register ScrollTrigger plugin
    if (gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const element = ref.current;

    /**
     * Coffee Spill Animation Logic:
     * - Tracks scroll velocity
     * - Applies liquid-like distortion based on scroll speed
     * - Creates elastic, organic motion
     */

    // Kill existing animation if present
    if (animationRef.current) {
      animationRef.current.kill();
    }

    let lastY = 0;
    let rafId: number | null = null;

    const updateAnimation = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastY;

      // Smooth velocity
      scrollVelocityRef.current = gsap.utils.interpolate(
        scrollVelocityRef.current,
        deltaY,
        0.1
      );

      lastY = currentY;

      // Calculate distortion based on scroll velocity
      const maxDistortion = intensity * 15;
      const distortion = gsap.utils.clamp(
        -maxDistortion,
        maxDistortion,
        (scrollVelocityRef.current * intensity) / 2
      );

      // Apply skew transformation for liquid-like effect
      gsap.to(element, {
        skewY: distortion * 0.1,
        scaleY: 1 + Math.abs(distortion) * 0.01,
        scaleX: 1 - Math.abs(distortion) * 0.01,
        overwrite: 'auto',
        duration: 0.3,
      });

      // Subtle blur effect based on velocity
      const blur = Math.abs(scrollVelocityRef.current) * 0.02;
      gsap.to(element, {
        filter: `blur(${blur}px)`,
        overwrite: 'auto',
        duration: 0.3,
      });

      rafId = requestAnimationFrame(updateAnimation);
    };

    // Start the animation loop
    rafId = requestAnimationFrame(updateAnimation);

    // Cleanup function
    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      // Reset element styles
      gsap.to(element, {
        skewY: 0,
        scaleX: 1,
        scaleY: 1,
        filter: 'blur(0px)',
        duration: 0.5,
      });
    };
  }, [ref, intensity, enabled]);

  return;
}

/**
 * Alternative liquid wave animation using pixel offset
 * More performant but less realistic
 */
export function useLiquidScroll(
  ref: React.RefObject<HTMLElement>,
  options: CoffeeScrollOptions = {}
) {
  const { intensity = 0.5, enabled = true } = options;

  useEffect(() => {
    if (!enabled || !ref.current || isLowEndDevice() || typeof window === 'undefined') {
      return;
    }

    // Lazy import GSAP only when needed



    if (!gsap) {
      return;
    }

    const element = ref.current;
    let animationId: number | null = null;
    let lastY = 0;

    const animate = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastY;

      // Simple but effective offset based on scroll speed
      const offset = Math.sin(currentY * 0.005) * intensity * 10;
      const scale = 1 + Math.abs(deltaY) * 0.001 * intensity;

      gsap.to(element, {
        y: offset,
        scaleY: scale,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      lastY = currentY;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      gsap.to(element, {
        y: 0,
        scaleY: 1,
        duration: 0.5,
      });
    };
  }, [ref, intensity, enabled]);
}
