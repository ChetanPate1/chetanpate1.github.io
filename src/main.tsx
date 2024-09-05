// Core
import { StrictMode } from 'react';
// Third party
import { createRoot } from 'react-dom/client';
// Local
import { ThemeProvider } from '@/components/theme-provider.tsx';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);