<script setup lang="ts">
/**
 * 在 JavaScript/TypeScript 中，当导入路径指向一个目录（如 ./stores）时，模块系统会自动查找该目录下的 入口文件，默认优先级为：

index.ts（TypeScript 项目首选）
index.js
因此，./stores 实际上等价于 ./stores/index.ts。
 */
</script>

<template>
  <div id="app">
  <!--
  1. 当用户点击<router-link>或通过代码导航时，URL发生变化
  2. Vue Router根据新URL匹配对应的路由规则
  3. 将匹配到的组件渲染到<router-view/>所在的位置
  4. 旧组件会被销毁，新组件会被创建并挂载
这个标签是Vue Router的核心组件，几乎所有Vue单页应用都必须使用它来实现页面内容的动态切换。  -->
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
