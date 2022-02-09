<template>
  <logo-img />
  <hello-world msg="Welcome to Your Vue.js App" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import LogoImg from './components/LogoImg.vue'
// import HelloWorld from './components/HelloWorld.vue'
const time = t => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, t)
  })
}
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
