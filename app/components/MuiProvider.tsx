'use client';

import React, { useMemo } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@/app/context/ThemeContext';
import { getMuiTheme } from '@/app/styles/muiTheme';

export default function MuiProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    const muiTheme = useMemo(() => getMuiTheme(theme), [theme]);

    return (
        <MUIThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
