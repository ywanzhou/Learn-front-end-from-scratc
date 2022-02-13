<template>
  <div class="btn-wrap">
    <button type="button" class="btn btn-primary" @click="logoShow = !logoShow">
      Logo显示与隐藏
    </button>
    <button
      type="button"
      class="btn btn-primary"
      @click="helloWorldShow = !helloWorldShow"
    >
      HelloWorld显示与隐藏
    </button>
  </div>
  <br />
  <img v-show="logoShow" alt="Vue logo" src="./assets/logo.png" />
  <hello-world v-if="helloWorldShow" msg="【一碗周】过渡动画演示demo" />
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const logoShow = ref(true)
const helloWorldShow = ref(true)
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
.btn-wrap {
  display: flex;
  width: 520px;
  justify-content: space-between;
  margin: auto;
}
</style>
