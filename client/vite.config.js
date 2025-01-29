import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend URL
        changeOrigin: true,            // Needed to avoid CORS issues
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Optional, keeps paths unchanged
      },
    },
  }
})

