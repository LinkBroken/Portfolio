'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on client side only
  useEffect(() => {
    setMounted(true);

    // Try to restore theme from localStorage
    if (typeof window !== 'undefined') {
      try {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
          setTheme(storedTheme);
          document.documentElement.setAttribute('data-theme', storedTheme);
        } else {
          // Use system preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const newTheme = prefersDark ? 'dark' : 'light';
          setTheme(newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
        }
      } catch (_error) {
        // Fallback if localStorage is not available
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const newTheme = prefersDark ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    }
  }, []);

  // Update document and localStorage when theme changes
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', theme);

    // Dispatch custom event for other components to listen to
    try {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    } catch (_error) {
      console.warn('Unable to dispatch theme change event');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
