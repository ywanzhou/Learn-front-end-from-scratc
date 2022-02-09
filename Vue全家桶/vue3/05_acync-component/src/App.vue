<template>
  <logo-img />
  <hello-world msg="Welcome to Your Vue.js App" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LogoImg from './components/LogoImg.vue'
import LoadingComponent from './components/loading.vue'
import ErrorComponent from './components/error.vue'

// 定义一个耗时执行的函数，t 表示延迟的时间， callback 表示需要执行的函数，可选
const time = (t, callback = () => {}) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve()
    }, t)
  })
}

// 简单用法
const HelloWorld = defineAsyncComponent({
  // 工厂函数
  loader: () => {
    return new Promise((resolve, reject) => {
      ;(async function () {
        await time(2000)
        const res = await import('./components/HelloWorld.vue')
        // 手动设置加载失败
        reject(res)
      })()
    })
  },
  // 加载异步组件时展示的组件
  loadingComponent: LoadingComponent,
  // 加载组件失败时展示的组件
  errorComponent: ErrorComponent,
  // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
  delay: 0,
  // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
  // 默认值：Infinity（即永不超时，单位 ms）
  timeout: 1000,
  /**
   *
   * @param {*} error 错误信息对象
   * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
   * @param {*} fail  一个函数，指示加载程序结束退出
   * @param {*} attempts 允许的最大重试次数
   */
  onError(error, retry, fail, attempts) {
    // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
    // 必须调用其中一个才能继续错误处理。
    if (attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry()
    } else {
      fail()
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
