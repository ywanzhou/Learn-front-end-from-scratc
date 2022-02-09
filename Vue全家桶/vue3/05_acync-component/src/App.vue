<template>
  <logo-img />
  <hello-world msg="Welcome to Your Vue.js App" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LogoImg from './components/LogoImg.vue'
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
