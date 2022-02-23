import { createApp } from 'vue'
import App from './App.vue'
// 2 引入路由映射表
import routes from './router'

// 1 引入 createRouter
import { createRouter, createWebHistory } from 'vue-router'
// 3 创建路由实例，并传递对应配置
const router = createRouter({
  // history 模式 这里使用createWebHistory
  history: createWebHistory(),
  // 传递路由映射表
  routes
})
createApp(App).use(router).mount('#app')
