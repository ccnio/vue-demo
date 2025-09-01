import { useUserStore } from '@/stores'
import axios from 'axios' //pnpm i axios

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const store = useUserStore()
    if (store.user?.token) {
      /**
       * OAuth 2.0 规范 ，HTTP 支持多种认证方式（如 Basic、Digest、Bearer），前缀用于区分方案
       * 服务器解析流程为：
       * 读取完整头信息：获取 Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
       * 验证前缀：检查是否以 Bearer（注意末尾有空格）开头。
       * 提取 Token：截取空格后的部分（如 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...）。
       * 验证 Token：使用密钥或公钥解密/验证提取的 Token。
       */
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

export default instance
