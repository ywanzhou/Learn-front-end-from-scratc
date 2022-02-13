<template>
  <button class="btn btn-primary" @click="show = !show">显示与隐藏</button>
  <br />
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutDown"
  >
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
</style>
