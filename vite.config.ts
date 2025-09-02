import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock' //pnpm i vite-plugin-mock mockjs -D


// 配置组件自动注册的插件
// 配置 vant UI 组件库的解析器
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    viteMockServe({
      mockPath: 'src/mock', // 在哪个目录下编写 mock 数据
      enable: process.env.NODE_ENV !== 'production',
    }),
     // 样式重复引入，类型声明文件重复了
    Components({
      dts: false,
      resolvers: [VantResolver({ importStyle: false })]
    })
  ],

  // 基础路径，默认值为 /，可以配置为 /cp，这样路由就会在 /cp 下工作
  // base: '/cp',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
