<script setup lang="ts"></script>

<template>
  <!-- 固定定位，左侧箭头，标题，右侧文字 -->
  <van-nav-bar fixed left-arrow title="导航栏" right-text="注册"></van-nav-bar>
</template>
<style lang="scss" scoped>
/**
  * 使用 :deep() 选择器来覆盖第三方组件库的样式，
  * 穿透组件样式隔离，修改子组件（这里是Vant的<van-nav-bar>）的内部样式
 */
:deep() {  // 开启样式穿透
  .van-nav-bar {  // 目标组件的【类名】（Vant导航栏）
    &__arrow {
      color: var(--cp-text1);
      font-size: 18px;  // 设置箭头大小
    }
    &__title {
      font-size: 15px;
    }
  }
}
/**
&__arrow 是 SCSS/Sass 中的嵌套选择器语法，用于拼接父选择器，等价于 CSS 中的 .van-nav-bar__arrow。

1. 语法本质
在 SCSS 中，& 代表父选择器的引用，用于拼接选择器名称
&__arrow 会被编译为 .van-nav-bar__arrow（父选择器 .van-nav-bar + __arrow）


2. 工作原理

scss
.van-nav-bar {  // 父选择器
  &__arrow { ... }  // 等价于 .van-nav-bar__arrow
  &__title { ... }  // 等价于 .van-nav-bar__title
}
编译后的 CSS：

.van-nav-bar__arrow { ... }
.van-nav-bar__title { ... }
3. 核心作用
简化嵌套书写：避免重复输入父选择器，如无需写成 .van-nav-bar .van-nav-bar__arrow
遵循 BEM 规范：配合 __（双下划线）表示元素（Element），是 BEM 命名规范的典型应用
BEM：Block（块）- Element（元素）- Modifier（修饰符）的缩写
4. 使用场景
组件样式开发：尤其适合 UI 组件库（如 Vant、Element）的样式组织
复杂选择器拼接：还可用于伪类、后代选择器等场景，例如：

scss
Apply
.button {
  &:hover { ... }      // 等价于 .button:hover
  &.active { ... }     // 等价于 .button.active
  & > span { ... }     // 等价于 .button > span
}
5. 注意事项
& 必须写在选择器开头，不能用于中间或结尾
若无嵌套关系使用 &，会直接编译为 &__arrow（无效选择器）
在 Vue 的 <style lang="scss"> 中可直接使用此语法
这种写法既符合 CSS 模块化思想，又能保持代码简洁，是现代前端开发的常用实践。


在 SCSS 中使用 & 拼接选择器不必须嵌套，但嵌套是最常见且推荐的使用场景。以下是具体说明：

1. 嵌套使用（推荐）
scss
Apply
.van-nav-bar {  // 父选择器
  &__arrow { ... }  // 必须嵌套在父选择器内
}
优势：逻辑清晰，避免重复书写父选择器
编译结果：.van-nav-bar__arrow { ... }
2. 非嵌套使用（不推荐）
scss
.van-nav-bar__arrow { ... }  // 直接写完整选择器
效果等价：与嵌套写法编译结果完全相同
缺点：当父选择器变化时（如重命名组件），需手动修改所有相关选择器
 */
</style>
