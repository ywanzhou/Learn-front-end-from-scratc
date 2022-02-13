<template>
  <button class="btn btn-primary" @click="show = !show">显示与隐藏</button>
  <br />
  <transition mode="out-in" appear>
    <img v-if="show" alt="Vue logo" src="./assets/logo.png" />
  </transition>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
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
.v-enter-active {
  animation: flip 0.5s;
}
.v-leave-active {
  /* reverse -> 动画序列反转 */
  animation: flip 0.5s reverse;
}
</style>
