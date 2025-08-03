import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.json') && assetInfo.name?.includes('manifest')) {
            return 'manifest.json'
          }
          return assetInfo.name || 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8'
    }
  }
})
