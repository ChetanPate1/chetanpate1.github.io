import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const defaultConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [react()]
  };

  if (command === 'serve') {
    return {
      // dev specific config
      ...defaultConfig,
      server: {
        port: 8080
      }
    };
  } else {
    // command === 'build'
    return {
      // build specific config
      ...defaultConfig,
      base: '/'
    };
  }
});
