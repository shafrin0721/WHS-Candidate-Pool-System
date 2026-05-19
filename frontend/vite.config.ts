import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite',
  css: {
    postcss: './postcss.config.cjs',  // Add this line to point to your PostCSS config
  },
})
