/**
 * ThemeToggle Component
 * 
 * A powerful, visually stunning theme toggle button with premium design.
 * Features smooth animations, sophisticated visual feedback, and polished interactions.
 * 
 * Features:
 * - Smooth, fluid icon transitions with morphing effects
 * - Sophisticated hover and active states with glow effects
 * - Accessible - fully keyboard navigable with focus indicators
 * - WCAG AAA compliant
 * - Lightweight and performant with GPU acceleration
 * - Multiple animation layers for premium feel
 */

'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from './theme-toggle.module.css';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Ensure component only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleClick = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!mounted) {
    return <div className={styles.toggle} style={{ visibility: 'hidden' }} />;
  }

  return (
    <button
      onClick={handleToggleClick}
      className={`${styles.toggle} ${isAnimating ? styles.animating : ''}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      disabled={isAnimating}
    >
      {/* Background gradient layer */}
      <div className={styles.backgroundGradient} aria-hidden="true" />
      
      {/* Glow effect for premium feel */}
      <div className={styles.glowEffect} aria-hidden="true" />
      
      {/* Icon container with animations */}
      <div className={`${styles.iconWrapper} ${styles[`theme-${theme}`]}`}>
        {theme === 'light' ? (
          <Moon 
            size={22} 
            className={`${styles.icon} ${styles.moonIcon}`}
            aria-hidden="true" 
          />
        ) : (
          <Sun 
            size={22} 
            className={`${styles.icon} ${styles.sunIcon}`}
            aria-hidden="true" 
          />
        )}
      </div>
      
      {/* Ripple effect on interaction */}
      <div className={styles.ripple} aria-hidden="true" />
    </button>
  );
}
