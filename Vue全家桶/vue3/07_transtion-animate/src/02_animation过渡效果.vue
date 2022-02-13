<template>
  <button class="btn btn-primary" @click="logoShow = !logoShow">
    显示与隐藏
  </button>
  <br />
  <transition>
    <img alt="Vue logo" v-if="logoShow" src="./assets/logo.png" />
  </transition>
</template>

<script setup>
import { ref } from 'vue'
const logoShow = ref(true)
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
.v-enter-from,
.v-leave-to {
  transform: scale(0);
}
.v-enter-active {
  animation: animate 0.5s;
}
.v-leave-active {
  /* reverse -> 动画序列反转 */
  animation: animate 0.5s reverse;
}
.v-enter-to,
.v-leave-from {
  transform: scale(1);
}
/* 定义动画序列 */
@keyframes animate {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
