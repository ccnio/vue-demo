import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // createWebHistory参数为基础路径，在vite.config.ts中配置 base，默认值为 /，可以配置为 /project-name，这样路由就会在 /project-name 下工作
  // 路由模式有 hash、history，abstract 三种，hash 模式会在路径中添加 # 号，history 模式则不会
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
