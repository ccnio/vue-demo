import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// 引入 Vant 组件库, 写在 main.scss 前面，防止自定义样式被覆盖
import 'vant/lib/index.css'
import './styles/main.scss'
import pinia from './stores'
const app = createApp(App)

app.use(pinia) // 使用 Pinia 并启用持久化插件
app.use(router)

app.mount('#app')
