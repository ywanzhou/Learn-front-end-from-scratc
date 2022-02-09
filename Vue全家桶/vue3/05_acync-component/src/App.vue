<template>
  <logo-img />
  <hello-world msg="Welcome to Your Vue.js App" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LogoImg from './components/LogoImg.vue'

// 定义一个耗时执行的函数，t 表示延迟的时间， callback 表示需要执行的函数，可选
const time = (t, callback = () => {}) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve()
    }, t)
  })
}
// 定义异步组件，这里这样写是为了查看效果
const HelloWorld = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    ;(async function () {
      try {
        await time(2000)
        const res = await import('./components/HelloWorld.vue')
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })()
  })
})

// 简单用法
// const HelloWorld = defineAsyncComponent(() =>
//   import('./components/HelloWorld.vue'),
// )
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
