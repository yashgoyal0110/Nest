import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  optimizeDeps: {
    include: ['date-fns'],
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    visualizer({
      filename: 'stats.html', // Generates a stats report
      template: 'sunburst', // The format of the report
      open: false,
      gzipSize: true, // Shows gzip sizes
      brotliSize: true, // Shows brotli sizes
    }),
    EnvironmentPlugin({
      VITE_API_URL: process.env.VITE_API_URL,
      VITE_ENVIRONMENT: process.env.VITE_ENVIRONMENT,
      VITE_GRAPHQL_URL: process.env.VITE_GRAPHQL_URL,
      VITE_IDX_URL: process.env.VITE_IDX_URL,
      VITE_SENTRY_DSN: process.env.VITE_SENTRY_DSN || '',
    }),
  ],
  resolve: {
    alias: {
      api: path.resolve(__dirname, 'src/api'),
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      wrappers: path.resolve(__dirname, 'src/wrappers'),
      utils: path.resolve(__dirname, 'src/utils'),
      'sentry.config': path.resolve(__dirname, 'src/sentry.config.ts'),
      '@tests': path.resolve(__dirname, '__tests__'),
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
    host: true,
    strictPort: true,
    port: 3000,
  },
})
