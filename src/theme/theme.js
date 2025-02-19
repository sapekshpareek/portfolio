// src/theme.js
import { createTheme } from '@mui/material/styles';
import { palette as getPalette } from './palette';

export const colorPalette = {
  light: {
    primary: '#3b82f6',
    secondary: '#10b981',
    background: '#ffffff',
    text: '#1f2937',
    paper: '#f9fafb',
  },
  dark: {
    primary: '#60a5fa',
    secondary: '#34d399',
    background: '#1a202c',
    text: '#f3f4f6',
    paper: '#2d3748',
  },
};

export function getDesignTokens(mode) {
  const pal = getPalette(mode);

  return createTheme({
    palette: pal,
    });
}
