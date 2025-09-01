import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate' //pnpm i pinia-plugin-persistedstate # 持久化存储插件

import App from './App.vue'
import router from './router'

// 引入 Vant 组件库, 写在 main.scss 前面，防止自定义样式被覆盖
import 'vant/lib/index.css'
import './styles/main.scss'
const app = createApp(App)

app.use(createPinia().use(persist)) // 使用 Pinia 并启用持久化插件
app.use(router)

app.mount('#app')
