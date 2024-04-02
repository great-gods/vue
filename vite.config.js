import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /* エイリアスを構成する */
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  /* パブリック SCSS */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/common/mixin.scss";`
      }
    }
  },
  /* クロスドメインプロキシ */
  server: {
    host: 'localhost',
    port: 8083,
    open: false,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8083/',
        changeOrigin: true,
        rewrite: path => path.replace('^/api/', '')
      }
    }
  },
  eslintPlugin: {
    fix: true, /* エラーを修正する */
    include: [
            'src/**/*.vue',
            'src/**/*.ts',
            'src/**/*.js'
          ]
  }
})
