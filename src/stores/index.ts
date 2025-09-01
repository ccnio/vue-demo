import { createPinia } from "pinia";
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(persist) // 使用 Pinia 并启用持久化插件
export default pinia


// export {  useUserStore } from './modules/user'
export * from './modules/user'
