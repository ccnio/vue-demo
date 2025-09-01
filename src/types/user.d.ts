/**
 * 在Vue3+TypeScript项目中，types文件夹主要用于存放TypeScript类型定义文件（.d.ts），其核心作用包括：
 * 1. 统一管理类型定义：集中存放项目中共享的接口(interface)、类型别名(type)、枚举(enum)等，如当前打开的order.d.ts就定义了订单相关的类型。
 * 2. 增强类型安全：通过显式类型定义约束数据结构，帮助TypeScript编译器进行类型检查，减少运行时错误。
 * 3. 提升代码可维护性：避免类型定义散落在各个业务文件中，便于团队协作和后续维护。
 * 4. 提供类型提示：为IDE提供类型信息，实现智能补全和代码提示功能，提高开发效率。
 */
export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: string
  /** 用户名称 */
  account: string
  /** 手机号 */
  mobile: string
  /** 头像 */
  avatar: string
}


