import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock' //pnpm i vite-plugin-mock mockjs -D

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteMockServe({
      mockPath: 'src/mock', // 在哪个目录下编写 mock 数据
      enable: process.env.NODE_ENV !== 'production',
    }),
  ],

  // 基础路径，默认值为 /，可以配置为 /cp，这样路由就会在 /cp 下工作
  // base: '/cp',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
