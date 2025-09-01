import type { User } from '@/types/user' // 导入用户数据类型定义：@ 映射到 src/
import { defineStore } from 'pinia' // 导入 Pinia 的 store 定义函数
import { ref } from 'vue' // 导入 Vue 的响应式变量创建函数

// 定义名为 "cp-user" 的 store
export const useUserStore = defineStore(
  'cp-user',
  () => {
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
  },
  {
    persist: true, // 启用持久化存储，数据会保存在 localStorage 中
  },
)

/**
 * localStorage 是浏览器提供的一种持久化存储机制，允许在用户设备上存储键值对数据，其核心功能和特点如下：

一、基础功能与特性
持久化存储：数据保存在浏览器中，即使关闭页面或浏览器重启后依然存在（除非主动删除）
容量限制：通常为5MB，远大于Cookie的4KB
同源策略：仅允许同一域名下的页面访问存储的数据
简单API：提供直观的操作方法：
localStorage.setItem('key', 'value'); // 存储数据
localStorage.getItem('key'); // 获取数据
localStorage.removeItem('key'); // 删除数据
localStorage.clear(); // 清空所有数据

二、在当前项目中的应用
在 user.ts 中，通过Pinia的持久化配置自动使用localStorage
实现原理：Pinia持久化插件会自动将store中的响应式数据序列化为JSON并存储到localStorage
加载时机：页面加载时会从localStorage读取数据并恢复到store中

三、使用场景与注意事项
✅ 适用场景：
保存用户登录状态（避免重复登录）
存储用户界面偏好设置（如主题、布局）
缓存非敏感的用户数据
⚠️ 注意事项：
仅能存储字符串类型，复杂数据需使用JSON.stringify()和JSON.parse()转换
存储数据可被用户通过浏览器开发者工具修改，敏感信息需加密
不适合存储大量数据或频繁变化的数据（会影响性能）
当前项目通过Pinia的persist: true配置，已优雅地集成了localStorage功能，实现了用户状态的持久化管理。
 */
