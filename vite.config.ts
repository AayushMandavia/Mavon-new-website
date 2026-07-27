import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: false, // Ensures no .tsx/.ts source maps are emitted in production
    minify: true, // Minifies and obfuscates Javascript bundles
    cssMinify: true, // Minifies CSS bundles
  },
})
