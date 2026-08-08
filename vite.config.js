import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    // Gzip compression for production builds
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240, // Only compress files larger than 10KB
      deleteOriginFile: false,
    }),
    // Brotli compression (better than gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    // Bundle visualization for analysis
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor dependencies
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue-vendor'
            }
            if (id.includes('supabase')) {
              return 'supabase-vendor'
            }
            return 'vendor'
          }
        },
        // Optimize chunk file names for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Exclude PNG files from production build (use WebP/AVIF instead)
          if (assetInfo.name.endsWith('.png')) {
            return 'assets/png/[name]-[hash][extname]'
          }
          return 'assets/[ext]/[name]-[hash].[ext]'
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: false,
    // Minify CSS
    cssMinify: true,
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize CSS code splitting
    cssCodeSplit: true,
    // Additional optimization: exclude PNG from build if WebP/AVIF exist
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
    // Optimize CSS
    cssTarget: 'chrome80', // Target modern browsers for better CSS optimization
  },
  // Uncomment for GitHub Pages deployment
  // base: '/corextekapp/',
})


