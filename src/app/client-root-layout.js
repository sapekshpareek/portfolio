// app/client-root-layout.js
'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Geist, Geist_Mono } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';
import { getDesignTokens } from '../theme/theme';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function ClientRootLayout({ children }) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('color-mode');
    if (saved === 'light' || saved === 'dark') setMode(saved);
  }, []);

  const theme = useMemo(() => getDesignTokens(mode), [mode]);

  const toggleColorMode = () => {
    setMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('color-mode', next);
      return next;
    });
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased vsc-initialized`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header>
            {/* You can pass toggleColorMode prop to Navbar if it has a toggle button inside */}
            <Navbar toggleColorMode={toggleColorMode} mode={mode} />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
