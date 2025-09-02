<script setup lang="ts">
import { Button as VanButton } from 'vant'

/**
 * 在 JavaScript/TypeScript 中，当导入路径指向一个目录（如 ./stores）时，模块系统会自动查找该目录下的 入口文件，默认优先级为：

index.ts（TypeScript 项目首选）
index.js
因此，./stores 实际上等价于 ./stores/index.ts。
 */
import { useUserStore } from './stores'
import { request } from './utils/request'
import type { User } from './types/user'
const getUser = () => {
  request('patient/myUser', 'get', { test: 1 })
}

const login = () => {
  request<User>('login/password', 'POST', {
    mobile: '13211112222',
    password: 'abc12345',
  })
    .then((res) => {
      console.log('成功', res.data.account)
    })
    .catch((err) => {
      console.log('失败', err)
    })
}

const store = useUserStore()
</script>

<template>
  <div>
    App {{ store.user }}
    <van-button
      type="primary"
      @click="
        store.setUser({
          id: '1',
          token: '1',
          mobile: '1',
          avatar: '123',
          account: '1',
        })
      "
      >登录</van-button
    >
    <van-button type="primary" @click="store.delUser">退出</van-button>
    <van-button type="primary" @click="getUser">请求</van-button>

    <div><van-button type="default" @click="login">登录</van-button></div>
  </div>
</template>

<style scoped>
.main {
  color: var(--cp-primary);
  border-color: var(--footer-color);
}

.footer {
  color: var(--cp-primary);
  background-color: var(--footer-color);
}
</style>
