import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入 Vant 组件库, 写在 main.scss 前面，防止自定义样式被覆盖
import 'vant/lib/index.css'
import './styles/main.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
