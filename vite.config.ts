/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * Vite Configuration
 * 
 * @description Configures Vite bundler with React and Tailwind CSS v4 support,
 * along with Vitest for unit testing. Uses the new Tailwind v4 Vite plugin
 * which provides better performance through native integration.
 * 
 * @see https://vitejs.dev/config/
 * @see https://tailwindcss.com/docs/installation/vite
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  /**
   * Path Resolution Aliases
   * 
   * @description Maps import aliases to actual directories for cleaner imports.
   * Must be kept in sync with tsconfig.json paths for TypeScript support.
   */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@features': path.resolve(__dirname, './src/features'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  /**
   * Vitest Configuration
   * 
   * @description Configures the test environment for React component testing.
   * Uses jsdom to simulate a browser environment, enabling DOM manipulation
   * and React Testing Library functionality.
   */
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
})
