/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  server: {
    proxy: {
      "/rss": {
        target: "https://www.eluniverso.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/rss/,
            "/arc/outboundfeeds/rss-subsection"
          )
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
