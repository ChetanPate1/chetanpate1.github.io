import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  const defaultConfig = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };

  if (command === 'serve') {
    return {
      // dev specific config
      ...defaultConfig,
      plugins: [react()],
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
