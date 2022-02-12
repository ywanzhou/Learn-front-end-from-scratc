<template>
  <computed-demo v-model:name="name" />
  <h3>{{ name }}</h3>
</template>
<script setup>
import { ref } from 'vue'
import ComputedDemo from './components/test.vue'
const name = ref('一碗周')
</script>
