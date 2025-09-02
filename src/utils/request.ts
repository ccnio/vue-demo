import router from '@/router'
import { useUserStore } from '@/stores'
import axios, { type Method } from 'axios' //pnpm i axios
import { showToast } from 'vant'

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000,
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

instance.interceptors.response.use(
  // 响应拦截器
  (res) => {
    // 2xx 范围内的状态码都会触发该函数。
    console.log('响应拦截器', res)
    if (res.data.code !== 10000) {
      showToast(res.data.message || '请求失败，请稍后重试')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    console.log('响应拦截器', error)
    if (error.response.status === 401) {
      console.log('登录过期，请重新登录', router.currentRoute.value.fullPath)
      const store = useUserStore()
      store.delUser()
      // 避免登录页重定向死循环
      if (router.currentRoute.value.path !== '/login') {
        router.push({ path: '/login', query: { returnUrl: router.currentRoute.value.fullPath } })
      } else {
        router.push('/login')
      }
    }
    return Promise.reject(error)
  },
)
export default instance

type Data<T> = {
  code: number
  message: string
  data: T
}

export const request = <T>(url: string, method: Method = 'GET', data?: object) => {
  //强制将转换后的字符串类型限定为这五种
  method = method.toUpperCase() as 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'
  if (method === 'GET' || method === 'DELETE') {
    // get delete 请求
    return instance.request<unknown, Data<T>>({ url, method, params: data })
  } else {
    // post put patch 请求
    return instance.request<unknown, Data<T>>({ url, method, data })
  }
}
