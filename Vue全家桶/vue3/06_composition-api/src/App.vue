<template>
  <h3 ref="nameRef">一碗周</h3>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const nameRef = ref(null)
onMounted(() => {
  console.log(nameRef.value) // <h3>一碗周</h3>
})
</script>
