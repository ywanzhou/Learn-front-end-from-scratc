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
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
  /* 添加过渡动画 */
  transition: opacity 1.5s ease;
}
/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
