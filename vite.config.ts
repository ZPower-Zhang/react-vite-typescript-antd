import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import reactFresh from '@vitejs/plugin-react-refresh'

const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      'components': resolve('./src/components'),
      'views': resolve('./src/views'),
      'utils': resolve('./src/utils'),
      'layouts': resolve('./src/layouts'),
      'router': resolve('./src/router'),
      'assets': resolve('./src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 3306,
  }
})
