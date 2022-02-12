<template>
  <h3 ref="nameRef">一碗周</h3>
</template>
<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
const nameRef = ref(null)
onMounted(() => {
  console.log('onMounted')
})
onUpdated(() => {
  console.log('onUpdated')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
</script>
