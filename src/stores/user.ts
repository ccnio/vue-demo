import type { User } from '@/types/user' // 导入用户数据类型定义
import { defineStore } from 'pinia' // 导入 Pinia 的 store 定义函数
import { ref } from 'vue' // 导入 Vue 的响应式变量创建函数

// 定义名为 "cp-user" 的 store
export const useUserStore = defineStore('cp-user', () => {
  // 创建响应式用户变量，类型为 User | undefined
  const user = ref<User>()

  // 设置用户信息的方法
  const setUser = (u: User) => {
    user.value = u
  }

  // 清除用户信息的方法
  const delUser = () => {
    user.value = undefined
  }

  // 暴露状态和方法供外部使用
  return { user, setUser, delUser }
})
