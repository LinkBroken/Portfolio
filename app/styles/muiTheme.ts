'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const primaryColor = '#6366f1'; // Indigo
const secondaryColor = '#ec4899'; // Pink/Accent

export const getMuiTheme = (mode: 'light' | 'dark') => {
    const theme = createTheme({
        palette: {
            mode,
            primary: {
                main: primaryColor,
                light: '#818cf8',
                dark: '#4f46e5',
                contrastText: '#ffffff',
            },
            secondary: {
                main: secondaryColor,
            },
            background: {
                default: mode === 'light' ? '#ffffff' : '#030712',
                paper: mode === 'light' ? '#f9fafb' : '#0f172a',
            },
            text: {
                primary: mode === 'light' ? '#111827' : '#f9fafb',
                secondary: mode === 'light' ? '#4b5563' : '#94a3b8',
            },
            divider: mode === 'light' ? '#e5e7eb' : '#1e293b',
        },
        typography: {
            fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: '6rem',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
            },
            h2: {
                fontSize: '4.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
            },
            h3: {
                fontSize: '3.5rem',
                fontWeight: 700,
                lineHeight: 1.3,
            },
            h4: {
                fontSize: '2.8rem',
                fontWeight: 600,
            },
            h5: {
                fontSize: '2.2rem',
                fontWeight: 600,
            },
            h6: {
                fontSize: '1.8rem',
                fontWeight: 600,
            },
            body1: {
                fontSize: '2rem',
                lineHeight: 1.7,
            },
            body2: {
                fontSize: '1.8rem',
                lineHeight: 1.6,
            },
            button: {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.8rem',
            },
        },
        shape: {
            borderRadius: 12,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        padding: '8px 20px',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
                        },
                    },
                    containedPrimary: {
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                        borderRadius: 16,
                        border: `1px solid ${mode === 'light' ? '#e5e7eb' : '#1e293b'}`,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: primaryColor,
                            boxShadow: mode === 'light'
                                ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                : `0 10px 20px -5px rgba(99, 102, 241, 0.3)`,
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundImage: 'none',
                    },
                },
            },
        },
    });

    return responsiveFontSizes(theme);
};
