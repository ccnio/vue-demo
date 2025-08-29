export default {
  plugins: {
    //工作原理：当项目构建时，PostCSS会自动处理所有CSS文件，将代码中的px值按照viewportWidth比例转换为vw单位。]
    // 例如，在375px宽度的设计稿中，1px会被转换为1/375*100 = 0.2667vw。
    // 根据CSS规范，1vw等于当前视口宽度的1%。例如：在宽度为375px的手机屏幕上，1vw = 375px × 1% = 3.75px
    //vw：相对于视口宽度，1vw 等于视口宽度的 1%
    //vh：相对于视口高度，1vh 等于视口高度的 1%
    'postcss-px-to-viewport': { // 使用postcss-px-to-viewport插件
      viewportWidth: 375,  // 设置设计稿的视口宽度为375px（通常对应iPhone SE/XR等设备）
    },
  },
}
